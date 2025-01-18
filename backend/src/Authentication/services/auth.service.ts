import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

export class AuthService {
  static async register(email: string, password: string, name: string) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
          emailRedirectTo: 'http://localhost:3000/auth/callback'
        }
      });
      
      if (error) throw error;
      
      if (data.user && !data.user.confirmed_at) {
        return {
          message: 'Registration successful! Please check your email to confirm your account.',
          user: data.user
        };
      }
      
      return data;
    } catch (error: any) {
      console.error('Registration error:', error);
      throw new Error(error.message || 'Registration failed');
    }
  }

  static async login(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      return {
        message: 'Login successful',
        session: data.session,
        user: data.user
      };
    } catch (error: any) {
      console.error('Login error:', error);
      throw new Error(error.message || 'Login failed');
    }
  }

  static async resetPassword(email: string) {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/auth/reset-password'
      });
      if (error) throw error;
      return { message: 'Password reset email sent' };
    } catch (error: any) {
      console.error('Reset password error:', error);
      throw new Error(error.message || 'Password reset failed');
    }
  }

  static async refreshSession() {
    try {
      const { data, error } = await supabase.auth.refreshSession();
      if (error) throw error;
      return {
        message: 'Session refreshed',
        session: data.session
      };
    } catch (error: any) {
      console.error('Session refresh error:', error);
      throw new Error(error.message || 'Session refresh failed');
    }
  }
} 
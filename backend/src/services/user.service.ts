import { supabase } from '../config/supabaseClient';
import { IUser } from '../models/user';

export class UserService {
  // Create a user profile (assuming "profiles" table)
  static async createUserProfile(data: Partial<IUser>): Promise<IUser | null> {
    const { data: inserted, error } = await supabase
      .from('profiles')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating profile:', error);
      return null;
    }
    return inserted;
  }

  // Retrieve a profile by ID
  static async getUserProfile(id: string): Promise<IUser | null> {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
    return data;
  }

  // Update a user profile (full update)
  static async updateUserProfile(
    id: string,
    updates: Partial<IUser>
  ): Promise<IUser | null> {
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating profile:', error);
      return null;
    }
    return data;
  }

  // More methods as needed (delete, list, etc.)
}

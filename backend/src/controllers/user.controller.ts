import { Request, Response, RequestHandler } from 'express';
import { UserService } from '../services/user.service';

export const createProfile: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const profileData = req.body;
    const newUser = await UserService.createUserProfile(profileData);
    if (!newUser) {
      res.status(400).json({ message: 'Failed to create profile' });
      return;
    }
    res.status(201).json(newUser);
  } catch (error) {
    console.error('createProfile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProfile: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const userId = req.params.id;
    const user = await UserService.getUserProfile(userId);
    if (!user) {
      res.status(404).json({ message: 'Profile not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    console.error('getProfile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateProfile: RequestHandler = async (req, res, next): Promise<void> => {
  try {
    const userId = req.params.id;
    const updates = req.body;
    const updatedUser = await UserService.updateUserProfile(userId, updates);
    if (!updatedUser) {
      res.status(400).json({ message: 'Failed to update profile' });
      return;
    }
    res.json(updatedUser);
  } catch (error) {
    console.error('updateProfile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Additional methods as needed...

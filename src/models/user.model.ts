import mongoose, { Document, Schema, Model } from 'mongoose';

export interface UserInterface {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface UserDocument extends Document, Omit<UserInterface, 'id'> {}

const UserSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User: Model<UserDocument> = mongoose.model<UserDocument>(
  'User',
  UserSchema
);

export default User;

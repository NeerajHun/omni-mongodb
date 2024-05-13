import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/ create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Photo } from 'src/photo/schema/photo.schema';

interface UserWithPhotos extends User {
  photos: Photo[]; // Assuming you have a Photo interface or type defined
}

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private UserModel: Model<User>,
    @InjectModel('Photo') private PhotoModel: Model<Photo>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.UserModel(createUserDto);
    return newUser.save();
  }

  async updateUser(
    UserId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const existingUser = await this.UserModel.findByIdAndUpdate(
      UserId,
      updateUserDto,
      { new: true },
    );
    if (!existingUser) {
      throw new NotFoundException(`User #${UserId} not found`);
    }
    return existingUser;
  }

  async getUserWithPhotos(userId: string): Promise<UserWithPhotos> {
    // Fetch the user document
    const user = await this.UserModel.findById(userId).exec();

    if (!user) {
      throw new Error('User not found');
    }

    // Fetch the photos associated with the user
    const photos = await this.PhotoModel.find({ user: userId }).exec();

    const userWithPhotos = {
      ...user.toObject(),
      photos: photos,
    };
    return userWithPhotos;
  }

  async getAllUsers(): Promise<User[]> {
    const UserData = await this.UserModel.find();
    if (!UserData || UserData.length == 0) {
      throw new NotFoundException('Users data not found!');
    }
    return UserData;
  }

  async getUser(UserId: string): Promise<User> {
    const existingUser = await this.UserModel.findById(UserId).exec();
    if (!existingUser) {
      throw new NotFoundException(`User #${UserId} not found`);
    }
    return existingUser;
  }

  async deleteUser(UserId: string): Promise<User> {
    const deletedUser = await this.UserModel.findByIdAndDelete(UserId);
    if (!deletedUser) {
      throw new NotFoundException(`User #${UserId} not found`);
    }
    return deletedUser;
  }
}

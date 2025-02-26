import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { User, UserDocument } from '../model/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async createUser(email: string, password: string, role: string = 'user'): Promise<UserDocument> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new this.userModel({ email, password: hashedPassword, role });
        return newUser.save();
    }

    async findByEmail(email: string): Promise<UserDocument | null> {
        return this.userModel.findOne({ email }).exec();
    }

    async findById(id: string): Promise<UserDocument | null> {
        return this.userModel.findById(id).exec();
    }

    async findAll(): Promise<UserDocument[]> {
        return this.userModel.find().exec();
    }

    async updateUser(id: string, updateData: { password?: string; role?: string }): Promise<UserDocument | null> {
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }
        return this.userModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }

    async deleteUser(id: string): Promise<{ message: string }> {
        await this.userModel.findByIdAndDelete(id).exec();
        return { message: 'User deleted successfully' };
    }

    async generateResetToken(userId: string): Promise<string> {
        const resetToken = crypto.randomBytes(32).toString('hex');
        return resetToken;
    }
}
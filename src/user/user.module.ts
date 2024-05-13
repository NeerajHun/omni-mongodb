import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';
import { PhotoSchema } from 'src/photo/schema/photo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema },{ name: 'Photo', schema: PhotoSchema }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

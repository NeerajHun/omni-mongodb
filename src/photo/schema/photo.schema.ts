import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/user/schema/user.schema';

@Schema({ timestamps: true })
export class Photo {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  fileName: string;

  @Prop({ type: 'ObjectId', ref: 'User', required: true })
  user: User;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);

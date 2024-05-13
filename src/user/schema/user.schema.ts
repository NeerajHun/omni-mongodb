import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  status: boolean;
  @Prop()
  gender: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

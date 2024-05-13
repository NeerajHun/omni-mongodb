import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoSchema } from './schema/photo.schema';
import { MulterModule } from 'src/multer/multer.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Photo', schema: PhotoSchema }]),MulterModule],
  controllers: [PhotoController],
  providers: [PhotoService]
})
export class PhotoModule {}

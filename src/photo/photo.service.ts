import { Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Photo } from './schema/photo.schema';

@Injectable()
export class PhotoService {
  constructor(@InjectModel('Photo') private PhotoModel: Model<Photo>) {}

  async create(createPhotoDto: CreatePhotoDto) {
    const newPhoto = new this.PhotoModel(createPhotoDto);
    return newPhoto.save();
  }

  findAll() {
    return `This action returns all photo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreatePhotoDto {
  @IsString()
  url: string;

  @ApiProperty({ type: 'string', format: 'binary', required: true })
  photo: Express.Multer.File;

  @IsOptional()
  @IsString()
  fileName: string;

  @IsString()
  user: string;
}

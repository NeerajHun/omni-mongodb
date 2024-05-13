import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';
import { MulterModule } from './multer/multer.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/omni'),
    UserModule,
    PhotoModule,
    MulterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { OwnerModule } from './owners/owner.module';

// const url_db: string = process.env.URL_Mongodb as string;
@Module({
  imports: [
    MongooseModule.forRoot(
      // url_db,
      'mongodb+srv://huylam0054:huyLAMbinhhuy054@brianapple.mr7xd.mongodb.net/?retryWrites=true&w=majority&appName=BrianApple',
    ),
    UsersModule,
    OwnerModule,
  ],
})
export class AppModule {}

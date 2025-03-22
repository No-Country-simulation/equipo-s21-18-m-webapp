import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/user/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExercisesModule } from './exercises/exercises/exercises.module';
//import { ProfilesModule } from './profiles/profile/profiles.module';
import { TagsModule } from './tags/tags/tags.module';
import { CategoriesModule } from './categories/categories/categories.module';
import { RoutinesModule } from './routines/routine/routines.module';
import { CloudinaryModule } from 'nestjs-cloudinary';


@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    MongooseModule.forRoot(process.env.DATABASE_STRING),
    UsersModule,
    JwtModule.register({
      secret: 'equipo-s21-18', // Usa la misma clave secreta que en AuthModule
      signOptions: { expiresIn: '1h' },
    }),
    ExercisesModule,
    //ProfilesModule,
    TagsModule,
    CategoriesModule,
    RoutinesModule,
    CloudinaryModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        cloud_name: config.get('CLOUDINARY_NAME'),
        api_key: config.get('CLOUDINARY_KEY'),
        api_secret: config.get('CLOUDINARY_API_SECRET')
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
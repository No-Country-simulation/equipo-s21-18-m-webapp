import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/user/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ExercisesModule } from './exercises/exercises/exercises.module';
import { ProfilesModule } from './profiles/profile/profiles.module';

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
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  // Configuración Swagger
  const config = new DocumentBuilder()
    .setTitle('FitLover API')
    .setDescription('Documentación de la API App de ejercicios FitLover')
    .setVersion('1.0')
    .addBearerAuth() // Para autenticación con JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log(`🚀 Servidor corriendo en: http://localhost:3000/api/docs`);
}
bootstrap();

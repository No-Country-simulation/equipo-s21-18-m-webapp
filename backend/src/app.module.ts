import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataProviders } from './config/database.providers';

@Module({
  imports: [],
  controllers: [AppController,],
  providers: [AppService, ...dataProviders],
  exports: [...dataProviders]
})
export class AppModule {}

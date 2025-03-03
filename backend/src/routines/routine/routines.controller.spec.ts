import { Test, TestingModule } from '@nestjs/testing';
import { RoutinesController } from './routines.controller';
import { RoutinesService } from './routines.service';

describe('RoutinesController', () => {
  let controller: RoutinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoutinesController],
      providers: [RoutinesService],
    }).compile();

    controller = module.get<RoutinesController>(RoutinesController);
  });
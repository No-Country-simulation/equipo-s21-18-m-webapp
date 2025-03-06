import { Test, TestingModule } from '@nestjs/testing';
import { RoutinesService } from './routines.service';

describe('RoutinesService', () => {
  let service: RoutinesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoutinesService],
    }).compile();

    service = module.get<RoutinesService>(RoutinesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
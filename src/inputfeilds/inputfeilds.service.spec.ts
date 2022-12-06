import { Test, TestingModule } from '@nestjs/testing';
import { InputfeildsService } from './inputfeilds.service';

describe('InputfeildsService', () => {
  let service: InputfeildsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InputfeildsService],
    }).compile();

    service = module.get<InputfeildsService>(InputfeildsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

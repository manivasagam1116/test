import { Test, TestingModule } from '@nestjs/testing';
import { InputfeildsController } from './inputfeilds.controller';
import { InputfeildsService } from './inputfeilds.service';

describe('InputfeildsController', () => {
  let controller: InputfeildsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InputfeildsController],
      providers: [InputfeildsService],
    }).compile();

    controller = module.get<InputfeildsController>(InputfeildsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

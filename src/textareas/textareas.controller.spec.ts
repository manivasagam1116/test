import { Test, TestingModule } from '@nestjs/testing';
import { TextareasController } from './textareas.controller';
import { TextareasService } from './textareas.service';

describe('TextareasController', () => {
  let controller: TextareasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextareasController],
      providers: [TextareasService],
    }).compile();

    controller = module.get<TextareasController>(TextareasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

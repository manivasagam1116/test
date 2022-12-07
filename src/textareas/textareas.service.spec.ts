import { Test, TestingModule } from '@nestjs/testing';
import { TextareasService } from './textareas.service';

describe('TextareasService', () => {
  let service: TextareasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextareasService],
    }).compile();

    service = module.get<TextareasService>(TextareasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

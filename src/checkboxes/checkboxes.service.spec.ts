import { Test, TestingModule } from '@nestjs/testing';
import { CheckboxesService } from './checkboxes.service';

describe('CheckboxesService', () => {
  let service: CheckboxesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckboxesService],
    }).compile();

    service = module.get<CheckboxesService>(CheckboxesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

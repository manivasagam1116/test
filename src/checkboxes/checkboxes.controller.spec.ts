import { Test, TestingModule } from '@nestjs/testing';
import { CheckboxesController } from './checkboxes.controller';
import { CheckboxesService } from './checkboxes.service';

describe('CheckboxesController', () => {
  let controller: CheckboxesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckboxesController],
      providers: [CheckboxesService],
    }).compile();

    controller = module.get<CheckboxesController>(CheckboxesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { RadiobuttonsController } from './radiobuttons.controller';
import { RadiobuttonsService } from './radiobuttons.service';

describe('RadiobuttonsController', () => {
  let controller: RadiobuttonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RadiobuttonsController],
      providers: [RadiobuttonsService],
    }).compile();

    controller = module.get<RadiobuttonsController>(RadiobuttonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

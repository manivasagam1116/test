import { Test, TestingModule } from '@nestjs/testing';
import { RadiobuttonsService } from './radiobuttons.service';

describe('RadiobuttonsService', () => {
  let service: RadiobuttonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RadiobuttonsService],
    }).compile();

    service = module.get<RadiobuttonsService>(RadiobuttonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

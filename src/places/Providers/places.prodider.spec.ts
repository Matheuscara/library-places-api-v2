import { Test, TestingModule } from '@nestjs/testing';
import { PlacesProdider } from './places.prodider';

describe('PlacesProdider', () => {
  let provider: PlacesProdider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacesProdider],
    }).compile();

    provider = module.get<PlacesProdider>(PlacesProdider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

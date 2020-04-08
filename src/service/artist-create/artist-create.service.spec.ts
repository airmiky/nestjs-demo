import { Test, TestingModule } from '@nestjs/testing';
import { ArtistCreateService } from './artist-create.service';

describe('ArtistCreateService', () => {
  let service: ArtistCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistCreateService],
    }).compile();

    service = module.get<ArtistCreateService>(ArtistCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

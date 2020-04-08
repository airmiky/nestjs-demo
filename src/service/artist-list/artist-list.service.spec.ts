import { Test, TestingModule } from '@nestjs/testing';
import { ArtistListService } from './artist-list.service';

describe('ArtistListService', () => {
  let service: ArtistListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistListService],
    }).compile();

    service = module.get<ArtistListService>(ArtistListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

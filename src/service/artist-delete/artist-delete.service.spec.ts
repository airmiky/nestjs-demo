import { Test, TestingModule } from '@nestjs/testing';
import { ArtistDeleteService } from './artist-delete.service';

describe('ArtistDeleteService', () => {
  let service: ArtistDeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistDeleteService],
    }).compile();

    service = module.get<ArtistDeleteService>(ArtistDeleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

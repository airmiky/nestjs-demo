import { Test, TestingModule } from '@nestjs/testing';
import { AlbumReadService } from './album-read.service';

describe('AlbumReadService', () => {
  let service: AlbumReadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumReadService],
    }).compile();

    service = module.get<AlbumReadService>(AlbumReadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

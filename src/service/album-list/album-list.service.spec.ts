import { Test, TestingModule } from '@nestjs/testing';
import { AlbumListService } from './album-list.service';

describe('AlbumListService', () => {
  let service: AlbumListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumListService],
    }).compile();

    service = module.get<AlbumListService>(AlbumListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

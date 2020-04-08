import { Test, TestingModule } from '@nestjs/testing';
import { AlbumUpdateService } from './album-update.service';

describe('AlbumUpdateService', () => {
  let service: AlbumUpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumUpdateService],
    }).compile();

    service = module.get<AlbumUpdateService>(AlbumUpdateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

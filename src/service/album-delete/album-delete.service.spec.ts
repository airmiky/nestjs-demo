import { Test, TestingModule } from '@nestjs/testing';
import { AlbumDeleteService } from './album-delete.service';

describe('AlbumDeleteService', () => {
  let service: AlbumDeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumDeleteService],
    }).compile();

    service = module.get<AlbumDeleteService>(AlbumDeleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

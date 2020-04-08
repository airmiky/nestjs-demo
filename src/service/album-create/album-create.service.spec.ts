import { Test, TestingModule } from '@nestjs/testing';
import { AlbumCreateService } from './album-create.service';

describe('AlbumCreateService', () => {
  let service: AlbumCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlbumCreateService],
    }).compile();

    service = module.get<AlbumCreateService>(AlbumCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

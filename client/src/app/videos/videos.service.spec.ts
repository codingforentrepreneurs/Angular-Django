import { TestBed, inject } from '@angular/core/testing';

import { VideoService } from './videos.service';

describe('VideosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoService]
    });
  });

  it('should ...', inject([VideoService], (service: VideoService) => {
    expect(service).toBeTruthy();
  }));
});

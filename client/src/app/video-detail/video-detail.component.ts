import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/videos.service';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideoService]
})
export class VideoDetailComponent implements OnInit, OnDestroy {
    private routeSub:any;
    private req:any;
    video: VideoItem;
    slug:string;
  constructor(private route: ActivatedRoute, private _video:VideoService) { }

  ngOnInit() {
      this.routeSub = this.route.params.subscribe(params => {
          this.slug = params['slug']
          this.req = this._video.get(this.slug).subscribe(data=>{
            this.video = data as VideoItem
          })
      })
  }
  ngOnDestroy(){
      this.routeSub.unsubscribe()
      this.req.unsubscribe()
  }

   getEmbedUrl(item){
    return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2'
  }

}

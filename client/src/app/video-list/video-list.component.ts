import { Component, OnInit, OnDestroy } from '@angular/core';

import { VideoItem } from '../videos/video';
import { VideoService } from '../videos/videos.service';


@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
    private req: any;
    title = "Video List";
    // someItem = "<h1>Hi there</h1>"
    // todayDate; // https://angular.io/docs/ts/latest/guide/pipes.html
    videoList: [VideoItem];
  constructor(private _video:VideoService) {}

  ngOnInit() {
    // this.todayDate = new Date()
    this.req = this._video.list().subscribe(data=>{
      this.videoList = data as [VideoItem];
    })

  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

}

// ng g component youComponentName

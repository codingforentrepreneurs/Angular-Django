// https://angular.io/docs/ts/latest/guide/router.html
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const appRoutes: Routes = [
    {
        path:"",
        component: HomeComponent,
    },
    {
        path:"search",
        component: SearchDetailComponent,
    },
    {
        path:"videos",
        component: VideoListComponent,
    },
    {
        path:"videos/:slug",
        component: VideoDetailComponent,
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}








import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// third party imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafePipe } from './utility/safe.pipe';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoListComponent } from './video-list/video-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SafePipe,
    SearchComponent,
    SearchDetailComponent,
    VideoDetailComponent,
    VideoListComponent,
    
  ],
  imports: [
    // ngx-bootstrap
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),

    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

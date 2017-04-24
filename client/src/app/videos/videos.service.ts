import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx'; // might lead to error

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


// const endpoint = '/static/ang/assets/json/videos.json' // http://www.yourdomain.com/api/videos/
const endpoint = '/api/videos/'

@Injectable()
export class VideoService {
  constructor(private http: Http) { }

  list(){
      return this.http.get(endpoint)
              .map(response=>response.json())
              .catch(this.handleError)
  }

  featured(){
      return this.http.get(endpoint + "featured/")
              .map(response=>response.json())
              .catch(this.handleError)
  }

  get(slug){
    return this.http.get(endpoint + slug + "/")
              .map(response=>response.json())
              .catch(this.handleError)
  }

  search(query){
    let queryString = `?q=${query}`
    return this.http.get(endpoint + queryString)
              .map(response=>response.json())
              .catch(this.handleError)
  }


  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || '' }`;
    } else {
      errMsg = "Server error occurred please try again.";
    }
    return Observable.throw(errMsg);
  }


  // private handleError(error:any, caught:any): any{
  //     // console.log(error, caught)
  //     if (error.status == 404){
  //         alert("Oopps. Not found")
  //     } else {
  //       alert("Something went wrong. Please try again.")
  //     }
  // }

}

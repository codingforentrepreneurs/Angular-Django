import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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

  private handleError(error:any, caught:any): any{
      // console.log(error, caught)
      if (error.status == 404){
          alert("Oopps. Not found")
      } else {
        alert("Something went wrong. Please try again.")
      }
  }

}

import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchLocation = "Newport Beach"
    searchQuery: string;

    @Input()
    passedQuery: string;


  constructor(private router: Router) { }

  ngOnInit() {
      if (this.passedQuery){
          this.searchQuery = this.passedQuery
      }
  }

  submitSearch(event, formData){
      let searchedQuery = formData.value['q']
      if (searchedQuery){
         this.router.navigate(['/search', {q: searchedQuery}])
      }
  }
  searchQueryChange(){
      this.searchLocation = 'California'
  }

}

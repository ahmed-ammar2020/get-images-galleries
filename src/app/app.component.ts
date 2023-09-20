import { Component } from '@angular/core';
import { ReqsService } from './reqs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchTerm: string;
  inputValue: string;
  totalItems: number;
  itemsPerPage: number = 10;
  pageIndex: number;
  results: any;

  constructor(private reqService: ReqsService) {}

  ngOnInit() {}

  ngOnChanges() {
    console.log(this.inputValue);
  }

  handlePageEvent(e: any) {
    // update pageIndex proprty

    if (e.previousPageIndex < e.pageIndex) {
      e.pageIndex += 1;
    }
    this.pageIndex = e.pageIndex;

    this.reqService
      .getPhotos(this.searchTerm, this.itemsPerPage, this.pageIndex)
      .subscribe(({ total, results }) => {
        this.totalItems = +total;
        this.results = results;
      });

    //make the request with every pagination to a different page
  }

  pressEnter(event: any) {
    if (event.code === 'Enter') {
      this.searchTerm = this.inputValue;

      this.reqService
        .getPhotos(this.searchTerm, this.itemsPerPage, this.pageIndex)
        .subscribe(({ total, results }) => {
          this.totalItems = +total;
          this.results = results;
        });
    }
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface collectioResponse {
  total: string;
  results: {
    description: string;
    urls: {
      small: string;
    };
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class ReqsService {
  constructor(private http: HttpClient) {}

  getPhotos(term: string, itemsPerPage: number, pageNum: number) {
    return this.http.get<collectioResponse>(
      `https://api.unsplash.com/search/photos`,
      {
        params: {
          client_id: 'x6YEGC1SUK42jsVSVmZTiZ0-7BBn3nYg_kNU7E-inxQ',
          query: term,
          per_page: itemsPerPage,
          page: pageNum,
        },
      }
    );
  }
}

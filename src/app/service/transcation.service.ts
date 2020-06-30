import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transcation } from '../models/transcation';

@Injectable({ providedIn: 'root' })
export class TranscationService {
  constructor(private http: HttpClient) { }

  register(transcation: Transcation) {
      return this.http.post(`auth/createtrans`, transcation);
  }

  updateTrans(transcation: Transcation) {
    return this.http.post(`auth/updatetrans`, transcation);
}


  getAll(){
    return this.http.get(`auth/getAllTrans`);
}

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.prod';


const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class ContactService {
 

  constructor(private http: HttpClient) { }
}


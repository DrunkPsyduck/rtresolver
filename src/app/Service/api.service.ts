import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Global } from './Global';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = Global.urlApi;
  constructor(private _http: HttpClient) {}

  public getVideo(idVideo:string): Observable<any>{
    const request = idVideo.toString();
    return this._http.get(this.url+request+Global.urlApiFinal)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

     
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  static PATH_API = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  get(path: string) {
    return this.http.get(this.buildPath(path));
  }

  post(path: string, model) {
    return this.http.post(this.buildPath(path), model);
  }

  private buildPath(path){
    return BackendService.PATH_API + path;
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/users/';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(API_URL + 'allusers');
  }

  getUserById(id:number): Observable<any> {
    return this.http.get(API_URL + 'user/'+id);
  }

  delUser(id:number) : Observable<void>{
      return this.http.delete<void>(API_URL+'deluser/'+id)
  }

  getRoles() :  Observable<any>{
    return this.http.get(API_URL+'all')
  }

  acceptAnnonce(id:number):Observable<any>{
    return this.http.get(API_URL+'accept/'+id);
  }
}

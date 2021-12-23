import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json' })
};

const API_URL = 'http://localhost:8080/api/annonces/';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) { }

  getAnnonces(): Observable<any> {
    return this.http.get(API_URL + 'all');
  }
  getAnnonceImage(id): Observable<any> {
    return this.http.get(API_URL + 'getImage/'+id);
  }

  getMyAnnonces(name:String): Observable<any> {
    return this.http.get(API_URL + 'me/'+name);
  }

  addAnnonce(annonce,id): Observable<any> {
    return this.http.post(API_URL + 'add',{
      title:annonce.title,
      description:annonce.description,
      numtel:annonce.numtel,
      photo:annonce.photo,
      user:{id},
    }, httpOptions);
  }

  deleteAnnonce(id : any): Observable<void>{
    return this.http.delete<void>(API_URL+'delete/'+id)
  } 

  getAnnonceById(id:any) :  Observable<any>{
    return this.http.get(API_URL+'annonce/'+id)
  }

  rechAnnonce(mc:string):Observable<any>{
    return this.http.get(API_URL+'getannonce/'+mc)
  }

}

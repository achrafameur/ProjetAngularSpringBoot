import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AnnonceService } from '../_services/annonce.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // url="http://localhost:8080/api/annonces/getImage/"
  content: string;
  annonces : any ;
  annoncesF : any ;
  isAccepted = false;
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService,private userService: UserService, private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.annonceService.getAnnonces().subscribe((data)=>{
      this.annonces=data;
      this.annoncesF=this.annonces;
    })
  }

  set texte(s:string){
    this.annonces=this.filtrer(s);
  }

  filtrer(s:string){
    return this.annoncesF.filter((el)=>el.title.indexOf(s)!=-1)
  }

  getimage(id){
    this.annonceService.getAnnonceImage(id).subscribe();
  }
}

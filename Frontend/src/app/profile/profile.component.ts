import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../_services/annonce.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  annonces :any;
  currentUser: any;

  constructor(private token: TokenStorageService,private service:AnnonceService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser)
    this.service.getMyAnnonces(this.currentUser.username).subscribe((data)=>{
      this.annonces=data;
    });
  }

  delete(id:number){
    this.service.deleteAnnonce(id).subscribe(()=>{
      this.service.getMyAnnonces(this.currentUser.username).subscribe((data)=>{
        this.annonces=data;
      });
    }
    )
  }

}

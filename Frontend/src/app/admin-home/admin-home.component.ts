import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AnnonceService } from '../_services/annonce.service';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  content: string;
  annonces : any ;

  constructor(private userService: UserService, private annonceService: AnnonceService, private Adminservice : AdminService) { }

  ngOnInit(): void {
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
    })
  }

  delete(id:number){
    this.annonceService.deleteAnnonce(id).subscribe(()=>{
      this.annonceService.getAnnonces().subscribe((data)=>{
        this.annonces=data;
      })
    }
    )
  }
  
  accept(id:number){
    this.Adminservice.acceptAnnonce(id).subscribe(()=>{
      this.annonceService.getAnnonces().subscribe((data)=>{
        this.annonces=data;
      })
    }
    )
  }

}

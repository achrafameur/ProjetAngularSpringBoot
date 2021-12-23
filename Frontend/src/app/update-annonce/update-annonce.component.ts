import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from '../_services/annonce.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {
  id: any;
  currentUser: any;
  annonce: any;
  isAdded = false;

  constructor(private token: TokenStorageService ,private ar: ActivatedRoute ,private router : Router, private service : AnnonceService ) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.params.id;
    this.currentUser = this.token.getUser();
    console.log(this.id);
    this.service.getAnnonceById(this.id).subscribe(data=>this.annonce=data)
  }

  modifier(){
    this.service.addAnnonce(this.annonce,this.currentUser.id).subscribe(()=>{
      this.isAdded=true;
      this.service.deleteAnnonce(this.id).subscribe(()=>{
        this.router.navigate(['/profile'])
      })
    })
}

}

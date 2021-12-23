import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnnonceService } from '../_services/annonce.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  currentUser: any;
  isAdded = false;

  constructor(private token: TokenStorageService , private service:AnnonceService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  ajouter(f:NgForm){
    console.log(f.value.title)
    console.log(f.value.description)
    console.log(f.value.numtel)
    this.service.addAnnonce(f.value,this.currentUser.id).subscribe(()=>{
      this.isAdded=true;
    });
  }

}

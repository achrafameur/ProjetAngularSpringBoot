import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnnonceService } from '../_services/annonce.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  annonce ?: any;
  id!: number;

  constructor(private ar:ActivatedRoute,private service :AnnonceService) { }

  ngOnInit(): void {
    let id:number;
    this.ar.paramMap.subscribe((params : Params)=>{
        id=+params.get('id')
        console.log(id)
        this.service.getAnnonceById(id).subscribe((data)=>{ 
            this.annonce = data;
            console.log(this.annonce);
          } 
          )  
      }
    )
  }

}

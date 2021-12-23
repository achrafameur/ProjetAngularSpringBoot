import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AdminService } from '../_services/admin.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit{
  content: string;
  users : any ;
  currentUser: any;


  constructor(private userService: UserService , private service : AdminService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.service.getUsers().subscribe((data)=>{
      this.users=data;
    });
    this.currentUser = this.token.getUser();
  }

  delete(id:number){
    this.service.delUser(id).subscribe(()=>{
      this.service.getUsers().subscribe((data)=>{
        this.users=data;
      })
    }
    )
  }


}

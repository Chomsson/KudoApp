import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../interfaces/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  public user: User | undefined;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params['userId'];

    // this.user = this.userService.users.find((user)=>{
    //   return user.id === +userId;
    // })
    console.log(userId);
  }

}

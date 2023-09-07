import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from '../../interfaces/user';
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
    // encapsulation: ViewEncapsulation.None
})
export class UsersListComponent implements OnInit{
    public selectedRow: number |undefined;
    public users: User[] = [];

    constructor(private userService: UserService) {
            }

    ngOnInit(): void{
        // this.users = this.userService.users;
        this.userService.getUsers().subscribe((users)=>{this.users = users});
    }

    public selectRow(id: number){
        this.selectedRow = id;
    }
}

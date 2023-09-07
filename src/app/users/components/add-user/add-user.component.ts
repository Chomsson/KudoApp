import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../../shared/services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public onSubmit(form: NgForm): void{
    console.log(form);
    const userData = {
      kudos: 0,
      ...form.value
    }

    this.userService.addUser(userData).subscribe(()=>{
        this.router.navigate(['/']);
    });
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

}

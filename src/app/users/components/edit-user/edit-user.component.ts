import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import {User} from "../../interfaces/user";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public user: User;
  public userForm: FormGroup;

  constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: '',
      surname: '',
      position: '',
      department: '',
      manager: ''
    })
    const userId = this.route.snapshot.params['userId'];

  }



  public onSubmit():void{

  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditUserComponent } from './components/edit-user/edit-user.component';



@NgModule({
    declarations: [
        UsersListComponent,
        AddUserComponent,
        UserDetailsComponent,
        EditUserComponent
    ],
    exports: [
        UsersListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class UsersModule { }

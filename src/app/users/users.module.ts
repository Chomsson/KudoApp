import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
    declarations: [
        UsersListComponent,
        AddUserComponent,
        UserDetailsComponent
    ],
    exports: [
        UsersListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UsersModule { }

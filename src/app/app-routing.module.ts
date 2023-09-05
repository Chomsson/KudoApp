import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from "./users/components/add-user/add-user.component";
import {UserDetailsComponent} from "./users/components/user-details/user-details.component";

const routes: Routes = [
  {
    path:'add-user',
    component: AddUserComponent
  },
  {
    path: 'user-details',
    component: UserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

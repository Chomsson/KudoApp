import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from "./users/components/add-user/add-user.component";
import {UserDetailsComponent} from "./users/components/user-details/user-details.component";
import {TabsComponent} from "./shared/tabs/tabs.component";
import {EditUserComponent} from "./users/components/edit-user/edit-user.component";

const routes: Routes = [
  {
    path:'add-user',
    component: AddUserComponent
  },
  {
    path: 'user-details/:userId',
    component: UserDetailsComponent
  },
  {
    path: 'user-details/:userId/edit',
    component: EditUserComponent
  },
  {
    path: '',
    component: TabsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

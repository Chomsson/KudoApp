import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule } from '@angular/forms';
import {UsersListComponent} from "../users/components/users-list/users-list.component";
import {UsersModule} from "../users/users.module";
import {KudosModule} from "../kudos/kudos.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TabsComponent
  ],
  exports: [
    HeaderComponent,
    TabsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
      UsersModule,
      KudosModule,
      RouterModule
  ]
})
export class SharedModule { }

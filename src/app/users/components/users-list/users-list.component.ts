import {Component, ViewEncapsulation} from '@angular/core';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
    // encapsulation: ViewEncapsulation.None
})
export class UsersListComponent{

  public users : User[]= [
    {
       id: 0,
       name: 'Piotr',
       surname: 'Maksam',
       position: 'Mistrz',
       department: 'Świat',
       manager: 'Ja',
       kudos: 0 
    },
    {
      id: 0,
      name: 'Zdzisław',
      surname: 'Kozubek',
      position: 'Sługa',
      department: 'żaden',
      manager: 'Piotr Maksam',
      kudos: 0 
   }
  ]
}

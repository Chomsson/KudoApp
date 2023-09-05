import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KudosListComponent } from './components/kudos-list/kudos-list.component';



@NgModule({
    declarations: [
        KudosListComponent
    ],
    exports: [
        KudosListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class KudosModule { }

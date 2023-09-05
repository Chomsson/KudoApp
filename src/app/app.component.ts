import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'kudo-app-ak-training';

  @Input() public title = 'AKMF KUDO';
  public view ='users';

  public changeSelectedView(): void{

  }
    // public ngOnInit():void {
    //   this.title = "AKMF KUDO";
    // }
}

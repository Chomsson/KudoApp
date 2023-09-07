import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Output() selectedView: EventEmitter<string> = new EventEmitter() ;
  public view = 'users';

  public changeView(viewName: string): void{
    console.log(viewName);
    this.selectedView.emit(viewName);
    this.view = viewName;
  }



  constructor() { }

  ngOnInit(): void {
  }

}

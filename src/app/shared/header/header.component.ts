import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public title = '';
  today: Date = new Date();
  showDate = false;

  public onClick(): void{
    this.title = "Mój tytuł";
  }

  public onMouseOver(): void {
    this.title = "jeszcze inny";
  }

  constructor() { }

  ngOnInit(): void {
  }

}

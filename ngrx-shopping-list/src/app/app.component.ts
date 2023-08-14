import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ingredients?:any[]=[
    {name:'Maçã', amount:2},
    {name:'Laranja', amount:12}
  ];
}

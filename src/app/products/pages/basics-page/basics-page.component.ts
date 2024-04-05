import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = "gonzalo";
  public nameUpper: string = "GONZALO";
  public fullName: string = "gOnZaLo mOreNo";
  
  public customDate: Date = new Date();
}

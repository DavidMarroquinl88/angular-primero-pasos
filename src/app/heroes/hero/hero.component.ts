import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public firstName : string = "David";
  public lastName : string = "Marroquín López";


  get getAge():number{
    return 100;
  }

  getName():string{
    return `${this.firstName} - ${this.lastName}`;
  }

  changeFirstName():void{
    this.firstName = "José Isidro".toUpperCase();
  }

  changeLastName():void{
    this.lastName = "Marroquín López".toUpperCase()
  }
}

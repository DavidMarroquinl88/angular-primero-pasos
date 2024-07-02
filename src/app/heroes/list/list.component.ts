import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public names : string[] = ['name1','name2','name3','name4','name5'];

  public nameDelete? : string;


  revemoLastName(){
    this.nameDelete = this.names.pop();
  }


}

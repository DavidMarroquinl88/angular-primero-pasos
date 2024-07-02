import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})


export class MainPageDBZComponent  {


  constructor(
    private dbzService : DbzService
  ){
    const a : number = 10;
    let b = a;

  }

  get characters() : Character[]{
    return this.dbzService.characters;
  }


  onAddCharacter(character : Character): void{
    this.dbzService.add(character);
  }

  onDeleteCharacter(id : string){
    this.dbzService.delete(id);
  }
}

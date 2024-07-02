import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as UUID} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {


  public characters : Character[] = [
    {
      id : UUID(),
      name : 'Gojan',
      power : 300
    },
    {
      id : UUID(),
      name : 'Goku',
      power : 500
    },
    {
      id : UUID(),
      name : 'Vegeta',
      power : 750
    },
    {
      id : UUID(),
      name : 'Picolo',
      power : 700
    }
  ];

  add(item : Character){

    const newItem = {id:UUID(),...item};

    this.characters.push(newItem);
  }


  delete(id : string){
    this.characters = this.characters.filter(e => e.id !== id);
  }

}

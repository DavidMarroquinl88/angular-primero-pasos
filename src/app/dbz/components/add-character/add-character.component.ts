import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

@Output()
public addCharacterEventEmitter : EventEmitter<Character> = new EventEmitter();

public character : Character = {
  name : '',
  power : 0
};

newCharacter() : void{

  if(this.character.name.length <= 0)
    return;

  this.addCharacterEventEmitter.emit(this.character);

  this.character = {name : '' , power : 0};
}




}

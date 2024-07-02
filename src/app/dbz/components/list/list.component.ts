import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public deleteCharacterEventEmitter : EventEmitter<string> = new EventEmitter();

  @Input()
  public charactersList : Character[] = [];

  public deleteCharacter(id : string) : void{
    this.deleteCharacterEventEmitter.emit(id);
  }
}

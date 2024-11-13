import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  // Emisor de eventos
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacer(): void {

    // Se pausa la ejecucion. Es una forma de depurar la app y ver donde esta el error
    //debugger;

    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);
    // Limpio valores
    // this.character.name = '';
    // this.character.power = 0

    this.character = {name : '', power : 0};

  }
}

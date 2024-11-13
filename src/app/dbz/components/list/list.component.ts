import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // El ojetivo es poder obtener la informacion del padre (en este caso main-page.component), para ello utilizo Input.
  // Con input lo que establezco es que esta clase puede recibir una propertie llamada characterList que va a ser retornada por el padre

  @Input()
  public characterList: Character[] = [];

  //onDelete
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( { id }: Character): void {

    // cuando tengo que enviar algo, recordar que tengo que emitir
    this.onDelete.emit(id);
  }
}

// Tengo que hacer un evento para que la main escuche

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

    // Esto es lo que va a enviar el padre al hijo
    public characters: Character[] = [

      {
      id: uuid(),
      name: 'Krillin',
      power: 1000
      },
      {
        id: uuid(),
        name: 'Goku',
        power: 9500
      },
      {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
      }

    ];

    addCharacter( character: Character ): void{

      const newCharacter: Character = {
        id: uuid(),
        ...character
      }

      // Inserta un nuevo elemento al final del arreglo
      this.characters.push(newCharacter);

    };

    // onDeleteCharacter( index: number) {
    //   remover el elemento con .splice (1 hace referencia a que borro un solo elemento)
    //   this.characters.splice(index, 1);
    // }

    deleteCharacterById(id: string) {

      // filtra todos menos el id que coincida
      this.characters = this.characters.filter( character => character.id !== id);
    }
}

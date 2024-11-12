import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}} </h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetValue()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  constructor() { }
  public counter:number = 10;

  increaseBy( value:number ): void {
    this.counter += value;
  }

  resetValue():void {
    this.counter = 10;
  }

}

// No es mas que una clase que se exporta, tiene un decorador @Component que dice cual es el template y el selector (nombre)
// a-componente crea el componente

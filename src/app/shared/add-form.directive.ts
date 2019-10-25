import { Directive, ViewContainerRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class AddFormDirective {

  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement
    let trim = input.value.replace(/\s+/g, '')

    if(trim.length > 16) {
     trim = trim.substr(0, 16)
    }

    let numbers = []
    for (let index = 0; index < trim.length; index+=4) {
        numbers.push(trim.substr(index, 4))
    }

    input.value = numbers.join(' ')
  }


  constructor(public viewContainerRef: ViewContainerRef) { }

}

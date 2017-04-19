import { Directive, Input } from '@angular/core';

@Directive({ selector: '[myCondition]' })

export class ngInitDirective {
    constructor() { }


    @Input() set myCondition(condition: boolean) {
        if (!condition) {
            console.log("hello")
        } else {
            console.log("hi")
        }
    }
}
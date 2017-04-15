import { ElementRef, OnInit } from '@angular/core';
export declare class Autosize implements OnInit {
    element: ElementRef;
    onInput(textArea: HTMLTextAreaElement): void;
    constructor(element: ElementRef);
    ngOnInit(): void;
    adjust(): void;
}

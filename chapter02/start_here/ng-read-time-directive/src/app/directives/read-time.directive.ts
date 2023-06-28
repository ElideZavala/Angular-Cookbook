import {
  Directive,
  Input,
  ElementRef,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';

export interface ReadTimeConfig {
  wordsPerMinute: number;
}

@Directive({
  selector: '[appReadTime]',
})
export class ReadTimeDirective implements OnInit {
  @Input() configuration: ReadTimeConfig = {
    wordsPerMinute: 200,
  };

  @Output() readTimeCalculated = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const text = this.el.nativeElement.textContent;
    const time = this.calculateReadTime(text);
    const timeStr = this.createTimeString(time);
    this.readTimeCalculated.emit(timeStr);
  }

  calculateReadTime(text: string) {
    // Divide en texto en palabras y cuenta el numero de palabras
    const wordsCount = text.split(/\s+/g).length;
    // Divide el numero de palabras por la velocidad de lectura configurada.
    const minutes = wordsCount / this.configuration.wordsPerMinute;
    // Redondemos hacia arriba.
    return Math.ceil(minutes);
  }

  createTimeString(timeInMinutes) {
    if (timeInMinutes === 1) {
      return '1 minute';
    } else if (timeInMinutes < 1) {
      return '< 1 minute';
    } else {
      return `${timeInMinutes} minutes`;
    }
  }
}

import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
export class VcLogsComponent implements OnInit, OnChanges {
  @Input() vName;
  logs: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const currValue = changes.vName.currentValue;

    // detectamos el primer cambio de valor con isFirstChange
    if (changes.vName.isFirstChange()) {
      this.logs.push(`Initial value set to ${currValue.trim()}`);
    } else {
      const prevValue = changes.vName.previousValue;
      this.logs.push(
        `Value changed from ${prevValue.trim()} to ${currValue.trim()}`
      );
    }
  }
}

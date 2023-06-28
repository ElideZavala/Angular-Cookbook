import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss'],
})
export class VcLogsComponent implements OnInit {
  _vName: string;

  fullName = new FormGroup({
    fullName: new FormControl(''),
  });

  @Input()
  get vName() {
    return this._vName;
  }

  set vName(name: string) {
    if (!name) return;
    if (!this._vName) {
      this.logs.push(`Initial version: ${name.trim()}`);
    } else {
      this.logs.push(
        `Version changed from ${this._vName.trim()} to ${name.trim()}`
      );
    }
    this._vName = name;
  }

  logs: string[] = [];

  person = {
    firstName: 'Jimmy',
    lastName: 'Smith',
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    set fullName(name) {
      var words = name.toString().split(' ');
      this.firstName = words[0] || '';
      this.lastName = words[1] || '';
    },
  };
  constructor() {}

  ngOnInit(): void {}

  formSubmit() {
    this.fullName.get('fullName').valueChanges.subscribe((value) => {
      // console.log(value);
      this.person.fullName = value;
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readTime: string;

  onReadTimeCalculated(readTimeStr: string) {
    console.log(readTimeStr);
    this.readTime = readTimeStr;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
import { map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  isComponentAlive: boolean;
  subscription: Subscription = null;
  inputStreamData = ['john wick', 'inception', 'interstellar'];
  streamsOutput$: Observable<number[]>;
  outputStreamData = [];

  constructor() {}

  ngOnInit() {
    this.startStream();
  }

  ngOnDestroy() {}

  startStream() {
    this.isComponentAlive = true;
    const streamSource = interval(1500);
    const secondStreamSource = interval(3000);
    const fastestStreamSource = interval(500);
    this.streamsOutput$ = merge(
      streamSource,
      secondStreamSource,
      fastestStreamSource
    ).pipe(
      takeWhile(() => !!this.isComponentAlive),
      map((output) => {
        this.outputStreamData = [...this.outputStreamData, output];
        return this.outputStreamData;
      })
    );
  }
}

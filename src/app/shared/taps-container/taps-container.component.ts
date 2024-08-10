import {
  AfterContentInit,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TapComponent } from '../tap/tap.component';

@Component({
  selector: 'app-taps-container',
  templateUrl: './taps-container.component.html',
  styleUrl: './taps-container.component.css',
})
export class TapsContainerComponent implements AfterContentInit {
  @ContentChildren(TapComponent) taps!: QueryList<TapComponent>;

  ngAfterContentInit(): void {
    this.taps.forEach((tap) => (tap.isSowing = false));
    this.taps.first.isSowing = true;
  }

  openTap(event: Event, tap: TapComponent) {
    event.preventDefault();
    this.taps.forEach((tap) => (tap.isSowing = false));
    tap.isSowing = true;
  }
}

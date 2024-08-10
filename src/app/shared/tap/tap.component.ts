import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrl: './tap.component.css',
})
export class TapComponent {
  @Input() title: string = '';
  isSowing: boolean = false;
}

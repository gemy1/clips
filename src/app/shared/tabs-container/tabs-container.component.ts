import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css',
})
export class TabsContainerComponent {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  ngAfterContentInit(): void {
    this.tabs.forEach((tab) => (tab.isSowing = false));
    this.tabs.first.isSowing = true;
  }

  openTab(event: Event, tab: TabComponent) {
    event.preventDefault();
    this.tabs.forEach((tab) => (tab.isSowing = false));
    tab.isSowing = true;
  }
}

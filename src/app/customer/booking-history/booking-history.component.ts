import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { Flight } from '../../flight-booking/flight';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
  flightSearchComponent: any;

  @ViewChild('myComponentContainer', { read: ViewContainerRef }) myComponentContainer: any;

  flights: Flight[] = [
    { id: 1, from: 'Hamburg', to: 'Berlin', date: '2025-02-01T17:00+01:00' },
    { id: 2, from: 'Hamburg', to: 'Frankfurt', date: '2025-02-01T17:30+01:00' },
    { id: 3, from: 'Hamburg', to: 'Mallorca', date: '2025-02-01T17:45+01:00' }
  ];

  constructor(private viewContainerRef: ViewContainerRef) {}

  async ngOnInit() {
    const esm = await import('../../flight-booking/flight-search/flight-search.component');
    // alt 1 ngComponentOutlet
    this.flightSearchComponent = esm.FlightSearchComponent;

    // alt 2 viewContainerRef
    // const viewRef = this.viewContainerRef.createComponent(esm.FlightSearchComponent);
    const viewRef = this.myComponentContainer.createComponent(esm.FlightSearchComponent);
    const flightSearchInstance = viewRef.instance;
    flightSearchInstance.from = 'Berlin';
    flightSearchInstance.to = 'Zürich';
    flightSearchInstance.search();
  }

  delete(): void {
    console.debug('delete ...');
  }
}

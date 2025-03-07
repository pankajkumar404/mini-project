import { Component, OnInit } from '@angular/core';
import { EventService, Event } from '../event.service';


@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent implements OnInit {

  events: Event[]=[];
  eventName: string='';
  eventDate: string='';

  constructor(private eventService: EventService){}
  ngOnInit(): void {
    this.events =  this.eventService.getEvents();
  }

  addEvent(){
    if (this.eventName && this.eventDate){
      const newEvent: Event = {
        name : this.eventName,
        date: new Date(this.eventDate),
      };

      this.eventService.addEvent(newEvent);
      this.events = this.eventService.getEvents();
      this.eventName = '';
      this.eventDate = '';

    }
  }

  getTimeLeft(eventDate:Date): string {
    return this.eventService.getTimeLeft(eventDate);
  }

}

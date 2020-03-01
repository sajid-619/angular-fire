import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
@Component({
selector: 'messages',
templateUrl: './messages.component.html',
styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
itemsRef: AngularFireList<any>;
items: Observable<any[]>;
projectsObservable: Observable<any[]>;
constructor(private db: AngularFireDatabase) { }
ngOnInit() {
}
}

import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';
import { People } from '../people.model';

@Component({
  selector: 'app-people-read',
  templateUrl: './people-read.component.html',
  styleUrls: ['./people-read.component.css']
})
export class PeopleReadComponent implements OnInit {

  peoples!: People[];
  displayedColumns = ['id', 'name', 'gender', 'age', 'email',  'phone', 'actions'];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.read().subscribe(peoples => {
      this.peoples = peoples;
      console.log(peoples)
    })
  }

}

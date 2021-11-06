import { People } from './../people.model';
import { Router } from '@angular/router';
import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-create',
  templateUrl: './people-create.component.html',
  styleUrls: ['./people-create.component.css']
})
export class PeopleCreateComponent implements OnInit {

  people: People = {
    id!:0,
    name: "",
    gender: "",
    age: null,
    email: "",
    phone: ""
  };

  constructor(private peopleService: PeopleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createPeople(): void {
    this.peopleService.create(this.people).subscribe(() => {
      this.peopleService.showMessage("Saved successfully!");
      this.router.navigate(["pessoas"]);
    })

  }

  cancel(): void {
    this.router.navigate(["pessoas"]);
  }

}

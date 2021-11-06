import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-crud',
  templateUrl: './people-crud.component.html',
  styleUrls: ['./people-crud.component.css']
})
export class PeopleCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  browserForCreation(): void {
    this.router.navigate(["pessoas/criar"]);
  }

}

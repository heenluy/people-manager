import { PeopleService } from './../people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from './../people.model';

@Component({
  selector: 'app-people-update',
  templateUrl: './people-update.component.html',
  styleUrls: ['./people-update.component.css']
})
export class PeopleUpdateComponent implements OnInit {

  people!: People;

  constructor(
    private router: Router,
    private peopleService: PeopleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.peopleService.readById(id).subscribe(people => {
      this.people = people
    });
  }

  UpdatePeople(): void {
    this.peopleService.update(this.people).subscribe(() => {
      this.peopleService.showMessage('Successfully updated!');
      this.cancel()
    })
  }

  cancel(): void {
    this.router.navigate(["/pessoas/listar"]);
  }

}

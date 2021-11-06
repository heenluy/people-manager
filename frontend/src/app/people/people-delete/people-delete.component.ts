import { PeopleService } from './../people.service';
import { Router, ActivatedRoute } from '@angular/router';
import { People } from './../people.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
  styleUrls: ['./people-delete.component.css']
})
export class PeopleDeleteComponent implements OnInit {

  people!: People;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.peopleService.readById(id).subscribe(people => {
      this.people = people;
    });
  }

  deletePeople(): void {
    this.peopleService.delete(this.people).subscribe(() => {
      this.peopleService.showMessage("Deleted!");
      this.cancel()
    })
  }

  cancel(): void {
    this.router.navigate(['/pessoas/listar'])
  }

}

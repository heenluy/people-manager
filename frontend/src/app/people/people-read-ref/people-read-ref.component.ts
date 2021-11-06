import { People } from './../people.model';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PeopleReadRefDataSource } from './people-read-ref-datasource';

@Component({
  selector: 'app-people-read-ref',
  templateUrl: './people-read-ref.component.html',
  styleUrls: ['./people-read-ref.component.css']
})
export class PeopleReadRefComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<People>;
  dataSource: PeopleReadRefDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'gender', 'age', 'email',  'phone'];

  constructor() {
    this.dataSource = new PeopleReadRefDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

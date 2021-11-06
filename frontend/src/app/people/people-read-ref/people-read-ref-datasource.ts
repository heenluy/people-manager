import { People } from './../people.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


// TODO: replace this with real data from your application
const EXAMPLE_DATA: People[] = [
  {id: 1, name: 'Hydrogen', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 2, name: 'Helium', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 3, name: 'Lithium', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 4, name: 'Beryllium', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 5, name: 'Boron', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 6, name: 'Carbon', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 7, name: 'Nitrogen', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 8, name: 'Oxygen', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 9, name: 'Fluorine', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 10, name: 'Neon', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 11, name: 'Sodium', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 12, name: 'Magnesium', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 13, name: 'Aluminum', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 14, name: 'Silicon', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 15, name: 'Phosphorus', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 16, name: 'Sulfur', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 17, name: 'Chlorine', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 18, name: 'Argon', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 19, name: 'Potassium', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
  {id: 20, name: 'Calcium', gender: 'Masculino', age: 16, email: 'null@null.com', phone: '27 98871-5632'},
];

/**
 * Data source for the PeopleReadRef view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PeopleReadRefDataSource extends DataSource<People> {
  data: People[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<People[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: People[]): People[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
   private getSortedData(data: People[]): People[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}



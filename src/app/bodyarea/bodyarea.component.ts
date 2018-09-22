import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { DataService } from '../data.service';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-bodyarea',
  templateUrl: './bodyarea.component.html',
  styleUrls: ['./bodyarea.component.scss']
})
export class BodyareaComponent implements OnInit {

    displayedColumns: string[] = ['movie_title', 'title_year'];
    dataSource = new MovieDataSource(this.data);


 // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private data: DataService) { }


  ngOnInit() {
   // this.dataSource.paginator = this.paginator;
  }

}

export class MovieDataSource extends DataSource<any> {
  constructor(private data: DataService) {
    super();
  }
  connect(): Observable<Movie[]> {
    return this.data.getMovieListing();
  }
  disconnect() {}
}
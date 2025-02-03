import { MoviesInterface } from './../../models/movies-interface';
import { MoviesApiService } from './../../services/movies-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  ImgFirst:string="https://image.tmdb.org/t/p/w500/";
  MoviesRes:MoviesInterface[]=[]
  constructor(private moviesApiService:MoviesApiService)
  {
  }
  
ngOnInit(): void {
  this.moviesApiService.GetMovies().subscribe(
    {
      next:(res)=>{this.MoviesRes=res.results},
      error:(err)=>{console.log(err)},
      complete:()=>{console.log("done")}
    }
  )
}
}

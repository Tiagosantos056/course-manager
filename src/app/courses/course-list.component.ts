import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void{
    this.courses = [
        {
          id: 1,
          name: 'Angular: forms',
          imageUrl: '',
          price: 99.99,
          code: 'XPS - 8956',
          duration: 120,
          rating: 5.4,
          releaseDate: 'Agust, 2, 2022'
        },
        {
          id: 2,
          name: 'Angular: HTTP',
          imageUrl: '',
          price: 79.99,
          code: 'PQW - 7824',
          duration: 80,
          rating: 5.4,
          releaseDate: 'July, 2, 2022'
        },
        {
          id: 3,
          name: 'Angular: Guard',
          imageUrl: '',
          price: 59.99,
          code: 'GPT - 1085',
          duration: 70,
          rating: 5.5,
          releaseDate: 'Agust, 2, 2022'
        }
      ]
    }


}

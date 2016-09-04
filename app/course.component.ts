import { Component } from '@angular/core';
import {CourseService} from './course.service';

@Component({
    selector: 'course',
    template: `<h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    </ul>
    {{ name }}
    `,
    providers: [CourseService]
})
export class CourseComponent {
    title = "Welcome to My Angular Course";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}

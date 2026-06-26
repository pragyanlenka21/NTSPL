import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightCourse'
})
export class HighlightCoursePipe implements PipeTransform {

  transform(course: string): string {
    return course == 'Computer Science' ? 'green' : 'black';
  }

}

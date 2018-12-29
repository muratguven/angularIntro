import { PostsModel } from 'src/app/posts/postsmodel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle'
})
export class FilterTitlePipe implements PipeTransform {

  transform(value: Array<PostsModel>, filter: string): Array<PostsModel> {
    
    if(!filter){
      return value;
    }else{
      return value.filter(p=>p.title.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase())!==-1);
    }
    
  }

}

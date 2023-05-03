import { Injectable, NotFoundException } from '@nestjs/common';
import { from, of, toArray } from 'rxjs';

@Injectable()
export class AppService {
  INFO_USER = [
    {
      name: 'matheus',
      id: 1,
    },
    {
      name: 'alex',
      id: 2,
    },
    {
      name: 'mauricio',
      id: 3,
    },
  ];
  getHello(): string {
    return 'Hello World!';
  }
  getUsersInfo() {
    return from(this.INFO_USER).pipe(toArray());
  }

  getUserInfo(postId: number) {
    const blogPost = this.INFO_USER.find(({ id }) => id === postId);

    if (!blogPost) {
      throw new NotFoundException();
    }

    return of(blogPost);
  }
}

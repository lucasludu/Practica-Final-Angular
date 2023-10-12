import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/dashboard/pages/users/models';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: User, ...args: unknown[]): unknown {

    const firstArgs = args[0];
    const result = `${value.name} ${value.lastName}`;

    switch (firstArgs) {
      case 'lowercase':
        return result.toLowerCase();
      case 'uppercase':
        return result.toUpperCase();
      default:
        return 'Invalid Args';
    }

    return;
  }

}

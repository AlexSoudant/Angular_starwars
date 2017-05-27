import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdaybby'
})
export class BirthdaybbyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace("BBY", " BBY (Before The Battle Of Yavin)");
  }

}

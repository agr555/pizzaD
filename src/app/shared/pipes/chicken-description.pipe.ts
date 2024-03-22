import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: ' '
})
export class ChickenDescriptionPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(value: string): string {
    return value.replace(/([Кк]ур(?:иц|ин|оч)[а-я]+)/g, (match: string) =>{
      return match.toUpperCase();
    });
  }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {

  /*  transform(value: string, wordPart: string): string {
      return value.replace(new RegExp('[А-Яа-я]*' + wordPart  + '[а-я]*','g'), (match: string) =>{
        return match.toUpperCase();
      });
    }*/

  /*transform(value: string, wordPart1:string,wordPart2:string): string {
    let result = value;
    [wordPart1,wordPart2].forEach(item => {
      result = result.replace(new RegExp('[А-Яа-я]*' + item + '[а-я]*', 'g'), (match: string) => {
        return match.toUpperCase();
      })
    });
    return result;
  }*/
  transform(value: string, wordParts: string[]): string {
    let result = value;
    wordParts.forEach(item => {
      result = result.replace(new RegExp('[А-Яа-я]*' + item.toLowerCase() + '[а-я]*', 'gi'), (match: string) => {
        return match.toUpperCase();
      })
    });
    return result;
  }
}

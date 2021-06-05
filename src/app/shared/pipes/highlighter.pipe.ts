import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  transform(value: string): string {
    let words = value.split(" ");
    const s = '<span class="highlight">'
    const e = '</span>'
    words.splice(1, 0, s);
    words.splice(3, 0, e);

    return words.join(" ");
  }

}

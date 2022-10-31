import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  /**
   * A kapott tömb szűrése a szűrőkifejezés alapján.
   * @param value {any[]} - a szűrendő tömb
   * @param phrase {string} - a szűrőkifejezés
   * @param key {string} - az objektumkulcs, amely alapján szűr
   * @returns {any[]} - a kifejezés alapján szűrt tömb
   */
  transform(
    value: any[],
    phrase: string | HTMLInputElement,
    key: string = ''
  ): any {
    // A KÖVETKEZŐ SORT TÁVOLÍTSD EL!!!
    if (Array.isArray(value) === false || !phrase || !key) return value;
    else {
      return value.filter((item) =>
        item[key]
          .toString()
          .toLocaleLowerCase()
          .includes(phrase.toString().toLocaleLowerCase())
      );
    }
    /**
     * FELADAT!
     * Ellenőrzés: ha a value nem tömb, vagy nincs megadva a phrase vagy a key,
     * térj vissza a value változóval.
     */

    /**
     * FELADAT!
     * Térj vissza a value.filter metódus eredményével (a value mindig tömb).
     * 1. Alakítsd az item[key] értékét string típusúra.
     * 2. A visszatérési érték true, ha valahol szerepel benne a phrase.
     * TIPP: az összehasonlítás előtt a két értéket alakítsd kisbetűsre.
     */
  }
}


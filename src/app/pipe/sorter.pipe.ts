
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  /**
   * A kapott tömb rendezése a szűrőkifejezés alapján.
   * @param value {any[]} - a tömb
   * @param key {string} - az objektumkulcs, amely alapján rendez
   * @returns {any[]} - a kulcs alapján rendezett tömb
   */
  transform(value: any[], key: string): any[] {
    // A KÖVETKEZŐ SORT TÁVOLÍTSD EL!!!


    /**
     * FELADAT!
     * Ellenőrzés: ha a value nem tömb vagy nincs megadva a key,
     * térj vissza a value változóval.
     */

    if (Array.isArray(value) === false || !key) return value;
     else {
      return value.sort((a, b) => {
        if(typeof a[key] === 'number' && typeof a[key] === 'number'){
          return a[key] - b[key];
        } else {
          const stringA = String(a[key]).toLowerCase();
          const stringB = String(b[key]).toLowerCase();
          return stringA.localeCompare(stringB);
        }
      })
     }

    /**
     * FELADAT!
     * Térj vissza a value.sort metódus eredményével!
     * 1. Ha az a[key] és a b[key] típusa is szám, térj vissza a különbségükkel.
     * 2. Ha nem számok, akkor mind a kettőt konvertáld string típusúra,
     *  azután alakítsd őket kisbetűssé.
     * 3. Térj vissza a két string localeCompare metódus által visszaadott
     *  összehasonlításának az eredményével.
     */

  }

}


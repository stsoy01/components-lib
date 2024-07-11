import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'i18n'
})

export class I18n implements PipeTransform {
    public glosary: any = {
        'ACCORDION': 'Аккордион'
    }
    transform(value: string): string {
        return this.glosary[value]
    }
}
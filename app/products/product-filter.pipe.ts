import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {

    transform(value: IProduct[], filterBy: string): IProduct[]{
        //if passed in a value to filter by, convert that to lower case
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        //if passed in a value to filter by, convert each productName to lower
        //lowercase and compare to filterBy, using indexOf to retain any productNames
        //that match filterBy
        return filterBy ? value.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
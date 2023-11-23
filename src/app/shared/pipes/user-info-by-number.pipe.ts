import { Pipe, PipeTransform } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CustomersService } from 'src/app/features/customer/services/customer.service';
import { loginService } from 'src/app/features/login/login.service';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    info
    constructor(
        private afAuth: AngularFireAuth,
        private router: Router,
        private customer: CustomersService,
        private service: loginService
    ) { }

    getInfo(number: string) {
        
        const formatnumber = number.replace(/.{3}/, '0');
        console.log(formatnumber)

        this.service.getCustomerByNumber(formatnumber)
            .pipe(
                tap(res => {
                    this.service.customerObj(res)
                }),
                catchError(err => {
                    console.log(err);
                    alert('could not create');
                    return throwError(err);
                }),
            )
            .subscribe();

    }

    transform(searchTerm: any) {
        if (searchTerm) this.getInfo(searchTerm)
        return 'hello'
    }

}

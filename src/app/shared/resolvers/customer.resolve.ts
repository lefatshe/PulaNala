
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CustomerModal } from 'src/app/customer/models/customer.model';
import { CustomersService } from 'src/app/customer/services/customer.service';

@Injectable({
    providedIn: 'root'
})
export class CustomerResolver implements Resolve<CustomerModal> {

    constructor(private customerService: CustomersService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):
        CustomerModal | Observable<CustomerModal> | Promise<CustomerModal> {

        const customerId = route.paramMap.get('customerId');

        return this.customerService.retrieveCustomer(customerId)
    }

}
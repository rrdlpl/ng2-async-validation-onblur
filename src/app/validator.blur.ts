import { AbstractControl, Validators, ValidatorFn, AsyncValidatorFn } from '@angular/forms';

import { isPresent } from './lang';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export const duplicated = (http: Http): ValidatorFn => {
    let subscribe: boolean = false;
    return (control: AbstractControl): { [key: string]: any } => {
        if (isPresent(Validators.required(control))) return null;
        // if (!subscribe) {
        //     subscribe = true;
        //     control.valueChanges.subscribe(() => {
        //         control.updateValueAndValidity();
        //     });
        // }

        let v: any = control.value;

        let d: boolean;
        http.get("/").toPromise().then(resp => {
            d = true;
            return { duplicated: d };
        });
    };
};


export const duplicatedAsync = (http: Http): AsyncValidatorFn => {
    let subscribe: boolean = false;
    return (control: AbstractControl): { [key: string]: any } => {
        return new Promise(resolve => {
            let d: boolean;
            http.get("/").toPromise().then(resp => {
                d = true;                
                if(control.value === "dupped"){                    
                    
                    resolve({"duplicated": true});
                } else {
                    control.setErrors(null);;
                    resolve(null);
                }                
            });
        });

    };
};



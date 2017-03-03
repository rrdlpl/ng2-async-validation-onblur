This a demo project in angular 2 to make async validations of inputs when the focus is lost.

# Validate only on blur directive
```
import { NgControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
    selector: '[validate-onblur]',
    host: {
        '(focus)': 'onFocus($event)',
        '(blur)': 'onBlur($event)',
        '(keyup)': 'onKeyup($event)',
        '(change)': 'onChange($event)',
        '(ngModelChange)': 'onNgModelChange($event)'
    }
})
export class ValidationOnBlurDirective {
    private validators: any;
    private asyncValidators: any;
    private wasChanged: any;
    constructor(public formControl: NgControl) {
    }
    onFocus($event) {
        this.wasChanged = false;
        this.validators = this.formControl.control.validator;
        this.asyncValidators = this.formControl.control.asyncValidator;
        this.formControl.control.clearAsyncValidators();
        this.formControl.control.clearValidators();
    }
    onKeyup($event) {
        this.wasChanged = true; // keyboard change
    }
    onChange($event) {
        this.wasChanged = true; // copypaste change
    }
    onNgModelChange($event) {
        this.wasChanged = true; // ng-value change
    }
    onBlur($event) {
        this.formControl.control.setAsyncValidators(this.asyncValidators);
        this.formControl.control.setValidators(this.validators);
        if (this.wasChanged)
            this.formControl.control.updateValueAndValidity();
    }
}
```


###The async validator that calls a rest service
```
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
```
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { duplicated, duplicatedAsync } from './validator.blur';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder]
})
export class AppComponent {
  title = 'app works!';

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: Http){
    this.form = this.fb.group({
      test : ['', Validators.required, duplicatedAsync(http).bind(this)]
    });
  }
}

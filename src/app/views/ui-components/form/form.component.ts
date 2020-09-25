import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'game-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder
    ) { }
  formGroup: FormGroup;
  ngOnInit(): void {
    this.createForm();
  }
createForm(){
  this.formGroup = this.formBuilder.group({
    title: '',
  });
}

// getErrorTitle() {
//   return this.formGroup.get('title').hasError('required')
//     ? 'Field is required'
//     : this.formGroup.get('title').hasError('minlength')
//     ? 'The field must be at least 5 characters long'
//     : '';
// }

  

}

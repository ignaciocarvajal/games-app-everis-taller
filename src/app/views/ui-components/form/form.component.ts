import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    title: [null, [Validators.required, Validators.minLength(5)]],
    price: [null, [Validators.required, Validators.pattern('^[0-9]*$')]],
  });
}

getErrorTitle() {
  return this.formGroup.get('title').hasError('required')
    ? 'El campo es obligatorio'
    : this.formGroup.get('title').hasError('minlength')
    ? 'El largo minimo debe ser'
    : '';
}

getErrorPrice() {
  return this.formGroup.get('price').hasError('required')
    ? 'El campo es obligatorio'
    : this.formGroup.get('price').hasError('pattern')
    ? 'Solo Numeros'
    : '';
}

onSubmit(data: any) {
  console.log('onSubmit data -->', data);
  
}

  

}

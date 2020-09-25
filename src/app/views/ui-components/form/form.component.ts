import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'game-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formGroup: FormGroup;

  @Input() game: any;
  @Input() edit: boolean;
  @Input() detail: boolean;
  @Output() post: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private readonly formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
    if(this.edit) {
      this.createForm(this.game);
    } else {
      this.createForm();
    } 
   
  }
  createForm(game?: any) {
    this.formGroup = this.formBuilder.group({
      title: [{value: game ? game.title : null, disabled: this.detail}, [Validators.required, Validators.minLength(5)]],
      price: [{value: game ? game.price : null, disabled: this.detail}, [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  getErrorTitle() {
    return this.formGroup.get('title').hasError('required')
      ? 'El campo es obligatorio'
      : this.formGroup.get('title').hasError('minlength')
        ? 'El largo minimo debe ser 5'
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
    this.post.emit(data);
  }



}

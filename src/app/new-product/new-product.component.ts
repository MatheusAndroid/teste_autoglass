import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  editForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    active: new FormControl(true),
    manufacturing: new FormControl(null, [Validators.required]),
    expiration: new FormControl(null, [Validators.required]),
    supplierCode: new FormControl('', [Validators.required]),
    supplierDescription: new FormControl(null, [Validators.required]),
    cnpj: new FormControl('', [Validators.required]),
  });
  isActive = this.editForm?.get('active')?.value;
  ngOnInit(): void {
  }

  saveProduct() { 
    this.editForm.get('active')?.setValue(this.isActive)
    if (this.editForm.valid) {
      // Criar o produto no serviço e na lista de produtos
      this.productsService.updateProduct(this.editForm.value).subscribe((value) => { 
        console.log(value)
        this.router.navigate(['']);        
      }, (error) => { 
        console.error(error)
      })
    }
  }
  cancelCreating(){
    this.router.navigate(['']);

  }
}

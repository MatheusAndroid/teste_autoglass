import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  constructor(
    private datePipe: DatePipe,
    private productsService: ProductsService,
    private router: Router
  ) { }

  editForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    active: new FormControl(''),
    manufacturing: new FormControl('', [Validators.required]),
    expiration: new FormControl('', [Validators.required]),
    supplierCode: new FormControl('', [Validators.required]),
    supplierDescription: new FormControl('', [Validators.required]),
    cnpj: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  saveProduct() { 
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

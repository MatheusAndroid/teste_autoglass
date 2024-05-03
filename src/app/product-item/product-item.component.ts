import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    private productsService: ProductsService,
    private router: Router
  ) { }

  product: Product | null = null;
  id: number = 0;
  isEditing = false;
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
    this.id = parseInt(this.activatedRoute.snapshot.params['id'], 10); // Obtendo o ID do produto
    this.product = JSON.parse(this.activatedRoute.snapshot.queryParams['product']); // Obtendo dados adicionais
    this.loadProduct();
    if (this.product == null) { 

    } else {
      this.createForm(this.product);
    }
  }

  editProduct(): void {
    this.isEditing = true;
  }

  createForm(values: null | Product): void { 
    this.editForm = new FormGroup({
      name: new FormControl(this.product?.name, [Validators.required]),
      active: new FormControl(this.product?.active),
      manufacturing: new FormControl(this.product?.manufacturing, [Validators.required]),
      expiration: new FormControl(this.product?.expiration, [Validators.required]),
      supplierCode: new FormControl(this.product?.supplierCode, [Validators.required]),
      supplierDescription: new FormControl(this.product?.supplierDescription, [Validators.required]),
      cnpj: new FormControl(this.product?.cnpj, [Validators.required]),
    });
  }

  loadProduct() { 

  }

  saveProduct(): void {
    if (this.editForm.valid) {
      // Atualizar o produto no serviço e na lista de produtos
      this.productsService.updateProduct(this.editForm.value).subscribe((value) => { 
        console.log(value)
        this.router.navigate(['']);        
      }, (error) => { 
        console.error(error)
      })
      this.isEditing = false;
    }
  }

  cancelEdit(): void {
    this.router.navigate(['']);
    this.isEditing = false;
  }
}

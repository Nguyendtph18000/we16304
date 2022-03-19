import { Component, OnInit } from '@angular/core';
import { IProduct } from '../entities/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  action = 'Tạo mới';
  ngOnInit(): void {
  }

  listProducts: IProduct[] = [
  {id:1,name:"Tivi Sony",price:2000,description:'Sản phẩm mới'}
  ];
  newProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0
  }

  onSubmit(data: any) {
    if (this.newProduct.id) {
      for (let index = 0; index < this.listProducts.length; index++) {
       if(this.listProducts[index].id == this.newProduct.id){
         this.listProducts[index] = data;
         this.newProduct = {
          id: 0,
          name: '',
          description: '',
          price: 0
        };
        this.action = 'Tao Moi'
       }
      }
    }else{
      const result = this.listProducts as any;
      const _id = Math.floor(Math.random() * 101 + 1);
      result.push({ ...data, id: _id, price: Number(data.price) });
      this.newProduct = {
        id: 0,
        name: '',
        description: '',
        price: 0
      }
    };
  
  }
  onEdit(data: any) {
    this.newProduct = data;
    this.action = 'Save';
  };
  remove(id:any){
   const confirm = window.confirm("Bạn muốn xóa sản phẩm này?");
   if(confirm){
    this.listProducts = this.listProducts.filter(item => item.id != id);
   }
  }
}

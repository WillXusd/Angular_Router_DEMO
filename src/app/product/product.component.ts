import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //第二步，声明接受传来的参数
  private productId: number;


  //第一步，在构造函数里注入
  constructor(private routeInfo:ActivatedRoute) { }

  //第三步，把传来的参数赋值给属性
  ngOnInit() {
    //参数订阅
    this.routeInfo.params.subscribe((params: Params) => this.productId = params["id"]);
    //参数快照
    //this.productId = this.routeInfo.snapshot.params["id"];
  }

}

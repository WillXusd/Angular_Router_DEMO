import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Product } from "../product/product.component";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


//在进入到商品信息页之前，预先从服务器读取数据，读好了之后带着信息进到路由里面
//首先要先声明一个泛型，这个泛型就是resolve要解析出来的类型
//需要用Injectable装饰器，只有这样router才能注入进来
@Injectable()
export class ProductResolve implements Resolve<Product>{
  constructor(private router: Router) {

}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Stock {
    let productId:number = route.params['id'];
    //路由路径id为1时
    if (productId == 1) {
      console.log('这里是1');
      return new Product(1, 'iPhone7'); // 返回实例化值 Product
    } else {
      this.router.navigate(['/home']);//产品不是1，导航到home组件上
      return undefined;
    }
  }

}

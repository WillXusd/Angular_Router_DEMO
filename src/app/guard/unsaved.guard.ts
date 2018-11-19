import { CanDeactivate } from "@angular/router/src/utils/preactivation";
import { ProductComponent } from "../product/product.component";


export class UnsavedGuard implements CanDeactivate<ProductComponent>{
  //要是不满足CanDeactivate的条件 就不能离开当前路由
  canDeactivate(component: ProductComponent) {
    return window.confirm("您还没有保存，确认离开吗?");
  }
}

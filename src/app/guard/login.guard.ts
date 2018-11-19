import { CanActivate } from "@angular/router";

export class LoginGuard implements CanActivate {

  //满足条件才可以进入路由
  canActivate() {
    let loggedIn: boolean = Math.random() < 0.5;
    if (!loggedIn) {
      console.log("用户未登录");
    }
    return loggedIn;
  }
}

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService ){
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //для испр запроса
        const authToken = this.authService.getToken();
        const authReq = req.clone ({
            headers: req.headers.set('Authorization', authToken)
        })
        console.log(req);
        req.clone()
        //
        // return next.handle(authReq);
        //для испр ответа
        return next.handle(authReq).pipe(
            tap({
                next: (event) => {
                    if (event instanceof HttpResponse) {
                        console.log(event);
                    }
                }
            })
        )
    }
} 
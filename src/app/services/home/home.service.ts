import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { API_PATH_HELLO, API_PATH_HOME, MY_WEB_API_API } from "../../shared/constants";
import { HelloWorld } from "src/app/shared/model/hello-world";
import { environment } from "src/environments/environment";

 @Injectable()
 export class HomeService{
     private host = environment.host;
     public constructor(private httpClient:HttpClient){}

     public getHello(): Observable<HelloWorld>{
         return this.httpClient.get<HelloWorld>(`${this.host}/${MY_WEB_API_API}/${API_PATH_HOME}/${API_PATH_HELLO}`)
     }
 }
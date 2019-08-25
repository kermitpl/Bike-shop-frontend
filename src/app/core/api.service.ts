import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";
import {ApiResponseLogin} from "../model/api.response.login"
import {Bike} from "../model/bike.model";
import {Transaction} from "../model/transaction.model";
import {Manufacturer} from "../model/manufacturer.model";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:9000/api/users/';
  baseUrlBike: string = 'http://localhost:9000/api/bikemodels/';
  baseUrlManufacturer: string = 'http://localhost:9000/api/manufacturers/';
  baseUrlTransaction: string = 'http://localhost:9000/api/transaction/';

  login(loginPayload) : Observable<ApiResponseLogin> {
    let loginToken = window.btoa(loginPayload.username + ':' + loginPayload.password);
    let hh = { 'Authorization':  'Basic ' +  loginToken };
    const requestParams = {
      headers: hh
    };
    return this.http.post<ApiResponseLogin>('http://localhost:9000/api/users/auth', {}, requestParams);
  }

  getUsers() : Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getBikes() : Observable<any> {
    return this.http.get<any>(this.baseUrlBike);
  }

  getManufacturers() : Observable<any> {
    return this.http.get<any>(this.baseUrlManufacturer);
  }

  getBikesSearchSize(size: number) : Observable<any> {
    return this.http.get<any>(this.baseUrlBike+"search/?size="+size);
  }

  getTransaction() : Observable<any> {
    return this.http.get<any>(this.baseUrlTransaction);
  }

  getTransactionSpecificUser(userId: string) : Observable<any> {
    return this.http.get<any>(this.baseUrlTransaction+"search/?user="+userId);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + id);
  }

  getBikeById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrlBike + id);
  }

  getManufacturerById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrlManufacturer + id);
  }

  getTransactionById(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrlTransaction + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  createBike(bike : Bike): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlBike, bike);
  }

  createManufacturer(manufacturer: Manufacturer): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlManufacturer, manufacturer);
  }

  createTransaction(bike : Bike): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrlTransaction, bike);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<any>(this.baseUrl, user);
  }

  updateBike(bike : Bike, id : string): Observable<any> {
    return this.http.put<any>(this.baseUrlBike + id, bike);
  }

  updateManufacturer(manufacturer: Manufacturer, id : string): Observable<any> {
    return this.http.put<any>(this.baseUrlManufacturer + id, manufacturer);
  }

  updateTransaction(tran : Transaction, id : string): Observable<any> {
    return this.http.put<any>(this.baseUrlTransaction + id, tran);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }

  deleteBike(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrlBike + id);
  }

  deleteManufacturer(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrlManufacturer + id);
  }

  deleteTransaction(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrlTransaction + id);
  }
}

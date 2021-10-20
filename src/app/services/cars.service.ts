import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Car } from "../models/car";


@Injectable()
export class CarService {

    brands: string[] = ["Vapid", "Carson", "Kitano", "Dabver", "Ibex", "Morello", "Akira", "Titan", "Dover", "Norma"];

    colors: string[] = ["Black", "White", "Red", "Blue", "Silver", "Green", "Yellow"];

    constructor(private http: HttpClient) { }

    getCars(): Observable<Car[]> {
        return this.http.get<Car[]>("assets/showcase/data/cars-large.json");
    }

    getCarsSmall(): Observable<Car[]> {
        return this.http.get<any>("assets/showcase/data/cars-small.json");
    }

    getCarsMedium(): Observable<Car[]> {
        return this.http.get<any>("assets/showcase/data/cars-medium.json");
    }

    getCarsLarge(): Observable<Car[]> {
        return this.http.get<any>("assets/showcase/data/cars-large.json");
    }















    generateCar(): Car {
        return {
            vin: this.generateVin(),
            brand: this.generateBrand(),
            color: this.generateColor(),
            year: this.generateYear()
        }
    }

    generateVin() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generateBrand() {
        return this.brands[Math.floor(Math.random() * Math.floor(10))];
    }

    generateColor() {
        return this.colors[Math.floor(Math.random() * Math.floor(7))];
    }

    generateYear() {
        return 2000 + Math.floor(Math.random() * Math.floor(19));
    }
}

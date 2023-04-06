import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class CarService {


    async getAll() {
        return (await axios.get('http://localhost:8080/api/cars')).data;
    }

    async create(brand, model, country, price) {
        return await axios.post('http://localhost:8080/api/cars', {
            brand: brand,
            model: model,
            country: country,
            price: price
        });
    }

    async updateById(id, brand, model, country, price) {
        await axios.patch('http://localhost:8080/api/cars/' + id, {
            brand: brand,
            model: model,
            country: country,
            price: price
        })
    }

    async deleteById(id) {
        await axios.delete('http://localhost:8080/api/cars/' + id);
    }
}
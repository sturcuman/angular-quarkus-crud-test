import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class CarService {


    async getAll() {
        return (await axios.get('http://localhost:8080/api/cars')).data;
    }

    async create(type, model, color, price) {
        return await axios.post('http://localhost:8080/api/cars', {
            type: type,
            model: model,
            color: color,
            price: price
        });
    }

    async updateById(id, type, model, color, price) {
        await axios.patch('http://localhost:8080/api/cars/' + id, {
            type: type,
            model: model,
            color: color,
            price: price
        })
    }

    async deleteById(id) {
        await axios.delete('http://localhost:8080/api/cars/' + id);
    }
}
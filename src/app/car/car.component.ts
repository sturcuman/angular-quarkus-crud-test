import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCarModalComponent } from '../modal/create.car.modal.component';
import { UpdateCarModalComponent } from '../modal/update.car.modal.component';
import { Car } from './car';


@Component({
    selector: 'car-comp',
    template: `


        <div class="px-4 py-5 my-5 text-center">
            <h1 class="display-5 fw-bold text-body-emphasis">Cars</h1>
            <div class="col-lg-6 mx-auto">
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button (click)="openRegistrationModal()" type="button" class="btn btn-dark btn-lg px-4 gap-3">
                        Create car
                    </button>
                </div>
            </div>
        </div>

        <div class="album py-5 px-5 bg-body-tertiary">
            <table class="table table-striped">

                <thead>
                <tr>
                    <th>Id</th>
                    <th>Type</th>
                    <th>Model</th>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                <tr *ngFor="let car of cars">
                    <td>{{car.id}}</td>
                    <td>{{car.type}}</td>
                    <td>{{car.model}}</td>
                    <td>{{car.color}}</td>
                    <td>{{car.price}} $</td>
                    <td>
                        <div class="btn-group">
                            <button (click)="updateById(car.id)" type="button" class="btn px-3 btn-outline-warning">
                                Update
                            </button>
                            <button (click)="deleteById(car.id)" type="button" class="btn px-3 btn-outline-danger">
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    `,

    providers: [CarService, NgbModal],
    entryComponents: [UpdateCarModalComponent]
})


export class CarComponent implements OnInit {

    cars: Car[] = [];
    constructor(private carService: CarService, private modalService: NgbModal) { }

    openRegistrationModal() {
        const modalRef = this.modalService.open(CreateCarModalComponent);
        modalRef.result.then(() => {}, (reason) => {
            if(reason === 1) {
                this.getCars();
            }
        });
    }

    updateById(id) {
        const modalRef = this.modalService.open(UpdateCarModalComponent);
        const car = this.cars.find(car => car.id === id);

        modalRef.componentInstance.id = car.id;
        modalRef.componentInstance.type = car.type;
        modalRef.componentInstance.model = car.model;
        modalRef.componentInstance.color = car.color;
        modalRef.componentInstance.price = car.price;

        modalRef.result.then(() => {}, (reason) => {
            if(reason === 1) {
                this.getCars();
            }
        });
    }

    async deleteById(id) {
        await this.carService.deleteById(id);
        this.getCars();
    }

    async getCars() {
        this.cars = await this.carService.getAll();
    }

    ngOnInit() {
        this.getCars();
    }

}
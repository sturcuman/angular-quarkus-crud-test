import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from '../services/car.service';


@Component({
    selector: 'modal-create',
    template: `
        <div class="modal modal-sheet position-static d-block bg-body-secondary" tabindex="-1" role="dialog"
             id="modalSignin">
            <div class="modal-content rounded-4 shadow">

                <div class="modal-header p-5 pb-4 border-bottom-0">
                    <h1 class="fw-bold mb-0 fs-2">Create car</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" (click)="activeModal.dismiss()"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body p-5 pt-0">
                    <form>
                        <div class="form-floating mb-3">
                            <input type="text" [(ngModel)]="type" class="form-control rounded-3" name="type" required>
                            <label for="type">Type</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input required type="text" class="form-control rounded-3" id="model" [(ngModel)]="model"
                                   name="model">
                            <label for="model">Model</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input required type="text" class="form-control rounded-3" id="color"
                                   [(ngModel)]="color" name="color">
                            <label for="model">Color</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input required type="number" class="form-control rounded-3" id="price" [(ngModel)]="price"
                                   name="price">
                            <label for="model">Price</label>
                        </div>

                        <button (click)="onSubmit()" class="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit">
                            Create
                        </button>
                    </form>
                </div>
            </div>
        </div>`,
    providers: [CarService]
})


export class CreateCarModalComponent {

    type: string;
    model: string;
    color: string;
    price: number;

    constructor(public activeModal: NgbActiveModal, public carService: CarService) { }

    async onSubmit() {
        if(!this.type || !this.model || !this.color || !this.price) {
            return
        }

        await this.carService.create(this.type, this.model, this.color, this.price);
        this.activeModal.dismiss(1);
    };
}
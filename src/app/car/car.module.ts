import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car.component';

import { CreateCarModalModule } from '../modal/create.car.modal.module';
import { UpdateCarModalModule } from '../modal/update.car.modal.module';

@NgModule({
    imports: [BrowserModule, FormsModule, CreateCarModalModule, UpdateCarModalModule],
    declarations: [CarComponent],
    bootstrap: [CarComponent],
    exports: [CarComponent]
})

export class CarModule { }
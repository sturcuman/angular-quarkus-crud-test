import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UpdateCarModalComponent } from './update.car.modal.component'; 


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [UpdateCarModalComponent],
    bootstrap: [UpdateCarModalComponent],
    exports: [UpdateCarModalComponent]
})

export class UpdateCarModalModule { }
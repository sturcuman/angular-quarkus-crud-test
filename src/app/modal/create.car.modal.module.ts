import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CreateCarModalComponent } from './create.car.modal.component'; 


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [CreateCarModalComponent],
    bootstrap: [CreateCarModalComponent],
    exports: [CreateCarModalComponent]
})

export class CreateCarModalModule { }
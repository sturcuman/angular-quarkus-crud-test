import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CarModule } from './car/car.module';
import { AppComponent} from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports:      [ BrowserModule, FormsModule, CarModule, NgbModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
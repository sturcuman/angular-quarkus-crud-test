package org.acme.hibernate.orm.panache.rest.models;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;

@Entity
@Table(name = "cars")
public class Car extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column(nullable = false)
    public String type;
    @Column(nullable = false)
    public String model;
    @Column(nullable = false)
    public String color;
    @Column(nullable = false)
    public Integer price;


    public Car(){}


    public Car(String type, String model, String color, Integer price) {
        this.type = type;
        this.model = model;
        this.color = color;
        this.price = price;
    }


    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", brand='" + type + '\'' +
                ", model='" + model + '\'' +
                ", country='" + color + '\'' +
                ", price=" + price +
                '}';
    }
}

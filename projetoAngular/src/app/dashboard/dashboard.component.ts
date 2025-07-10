import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedCar: string = 'Mustang';
  selectedCarData: any = {};

  cars = [
    { nome: 'Mustang' },
    { nome: 'Ranger' },
    { nome: 'Territory' },
    { nome: 'Bronco Sport' }
  ];

  carData: { [key: string]: any } = {
    'Mustang': {
      image: 'assets/mustang.png',
      metrics: [
        { title: 'Total de Vendas', value: 1500 },
        { title: 'Conectados', value: 500 },
        { title: 'Atualizar software', value: 750 }
      ],
      vin: '5YFBU4EE2EN240455',
      odom: '50000 km',
      fuel: '90%',
      status: 'on',
      lat: '-12.2222',
      long: '-43.2214'
    },
    'Ranger': {
      image: 'assets/ranger.png',
      metrics: [
        { title: 'Total de Vendas', value: 3100 },
        { title: 'Conectados', value: 430 },
        { title: 'Atualizar software', value: 1600 }
      ],
      vin: '1FTFW1ET1EKF51234',
      odom: '25000 km',
      fuel: '65%',
      status: 'on',
      lat: '-12.1000',
      long: '-43.3000'
    },
    'Territory': {
      image: 'assets/territory.png',
      metrics: [
        { title: 'Total de Vendas', value: 4560 },
        { title: 'Conectados', value: 500 },
        { title: 'Atualizar software', value: 3050 }
      ],
      vin: '9B4BJAC9RPL404877',
      odom: '10000 km',
      fuel: '21%',
      status: 'off',
      lat: '-12.2222',
      long: '-43.2214'
    },
    'Bronco Sport': {
      image: 'assets/bronco.png',
      metrics: [
        { title: 'Total de Vendas', value: 2200 },
        { title: 'Conectados', value: 350 },
        { title: 'Atualizar software', value: 980 }
      ],
      vin: '3FMCR9B60MRA12345',
      odom: '8000 km',
      fuel: '75%',
      status: 'off',
      lat: '-12.0500',
      long: '-43.1500'
    }
  };

  ngOnInit(): void {
    this.selectedCarData = this.carData[this.selectedCar];
  }

  onChangeCar(): void {
    this.selectedCarData = this.carData[this.selectedCar];
  }
}

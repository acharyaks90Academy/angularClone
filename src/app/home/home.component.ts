import { Component, OnInit } from '@angular/core';
import { Airport } from '../modules/airport-list';
import {Train} from '../modules/train-list';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    airportlist= [ 
        new Airport(1, 'HEATHROW TERMINAL 2'),
        new Airport(2, 'HEATHROW TERMINAL 3'),
        new Airport(3, 'HEATHROW TERMINAL 4'),
        new Airport(4, 'HEATHROW TERMINAL 5'),
        new Airport(5, 'GATWICK SOUTH'),
        new Airport(6, 'GATWICK NORTH'),
        new Airport(7, 'LUTON AIRPORT'),
        new Airport(8, 'LONDON CITY AIRPORT'),
        new Airport(9, 'GLASGOW INTERNATIONAL AIRPORT'),
        new Airport(10, 'BRISTOL AIRPORT'),
        new Airport(11, 'MANCHESTER AIRPORT'),
        new Airport(12, 'CARDIFF AIRPORT'),
        new Airport(13, 'FARNBOROUGH AIRPORT')
    ];

    trainlist= [ 
        new Train(1, 'KING CROSS STATION'),
        new Train(2, 'EUSTON STATION'),
        new Train(3, 'VICTORIA STATION'),
        new Train(4, 'LEICESTER SQUARE STATION'),
        new Train(5, 'PADDINGTON STATION'),
        new Train(6, 'WATERLOO STATION'),
        new Train(7, 'VICTORIA STATION')
    ];


    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}

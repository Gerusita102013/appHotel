import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  name:string;

  constructor(private geolocation: Geolocation, private rute:ActivatedRoute) {}

  ngOnInit() {
    this.name= this.rute.snapshot.paramMap.get('nick');
    
    this.cargarmapa();
    this.getPosition();
    
  }

  cargarmapa(){
    mapboxgl.accessToken = 'pk.eyJ1IjoicmludHJpYWdvIiwiYSI6ImNrZWtnamlsdzAwbGwydXJyc3l6bHppeXQifQ.UnZTaNYE9xQ-mbDpZjBT5A';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 15,
    center:[-80.206233359999999,-0.9207808]
    });
    map.on('load', function(){
      map.resize();
    })
    map.addControl(
      new MapboxDirections({
      accessToken: mapboxgl.accessToken
      }),
      'top-left'
    );
  }

  getPosition(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('latitud',resp.coords.latitude);
      console.log('longuitud',resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}

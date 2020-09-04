import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  name:string;
  constructor(private rute:ActivatedRoute) { }

  ngOnInit() {
    this.name= this.rute.snapshot.paramMap.get('nick');
  }

}

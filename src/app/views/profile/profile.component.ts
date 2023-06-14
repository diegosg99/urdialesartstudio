import { Component, Injectable, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  user!: Usuario;

  constructor () {
  }
  ngOnInit(): void {
    this.user = new Usuario(
      'Diego Silva Gómez',
      'diegosg22360@gmail.com',
      '695918615',
      '../../../assets/images/masterclass_marina_pastel.PNG',
      [],
      []
    )
  }

  cambiarFoto = () => {
    console.log('Buenos dias amores.')
  }

  // getUser = () => {
  //   console.log(this.user);
  //   return this.user;
  // }
}

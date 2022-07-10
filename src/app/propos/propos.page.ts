import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propos',
  templateUrl: './propos.page.html',
  styleUrls: ['./propos.page.scss'],
})
export class ProposPage implements OnInit {
  etudiants: { nom: string; prenom: string;telephone: string; email: string}[] = [
    {"nom": "MAIGA", "prenom": "Souleymane", "telephone": "70508842", "email": "soulmaigazou@gmail.com" },
  ];

  constructor() { }

  ngOnInit() {
  }

}

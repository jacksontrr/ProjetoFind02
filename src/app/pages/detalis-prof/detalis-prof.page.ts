import { Component, OnInit } from '@angular/core';
import { formularioprof } from "../../interfaces/formularioprof";

@Component({
  selector: 'app-detalis-prof',
  templateUrl: './detalis-prof.page.html',
  styleUrls: ['./detalis-prof.page.scss'],
})
export class DetalisProfPage implements OnInit {

private detalhe: formularioprof = {};
  constructor() { }

  ngOnInit() {
  }

}

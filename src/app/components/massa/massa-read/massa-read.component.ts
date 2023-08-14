import { Component, OnInit } from '@angular/core';
import { Massa } from '../massa.model';
import { MassaService } from '../massa.service';

@Component({
  selector: 'app-massa-read',
  templateUrl: './massa-read.component.html',
  styleUrls: ['./massa-read.component.css']
})
export class MassaReadComponent implements OnInit {

  massas: Massa[]
  displayedColumns = ['id', 'system', 'company', 'environment', 'url', 'description', 'user', 'password', 'notes', 'actions']

  constructor(private massaService: MassaService) { }

  ngOnInit(): void {
    this.massaService.read().subscribe(massas => {
      this.massas = massas
      console.log(massas)
    })
  }
}

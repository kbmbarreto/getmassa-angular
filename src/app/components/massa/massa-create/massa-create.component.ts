import { Component, OnInit } from '@angular/core';
import { MassaService } from '../massa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-massa-create',
  templateUrl: './massa-create.component.html',
  styleUrls: ['./massa-create.component.css']
})
export class MassaCreateComponent implements OnInit {

  constructor(private massaService: MassaService, private router: Router) { }

  ngOnInit(): void {

  }

  createMassa(): void {
    this.massaService.showMessage('Operação executada com sucesso!')
  }

  cancel(): void {
    this.router.navigate(['/massas'])
  }
}

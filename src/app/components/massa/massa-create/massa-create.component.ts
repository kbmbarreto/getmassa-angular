import { Component, OnInit } from '@angular/core';
import { MassaService } from '../massa.service';
import { Router } from '@angular/router';
import { Massa } from '../massa.model';

@Component({
  selector: 'app-massa-create',
  templateUrl: './massa-create.component.html',
  styleUrls: ['./massa-create.component.css']
})
export class MassaCreateComponent implements OnInit {

  massa: Massa = {
    system: '',
    company: '',
    environment: '',
    url: '',
    description: '',
    user: '',
    password: '',
    notes: ''
  }

  constructor(private massaService: MassaService, private router: Router) { }

  ngOnInit(): void {

  }

  createMassa(): void {
    this.massaService.create(this.massa).subscribe(() => {
      this.massaService.showMessage('Dados salvos com sucesso!')
      this.router.navigate(['/massas'])
    })
  }

  cancel(): void {
    this.router.navigate(['/massas'])
  }
}

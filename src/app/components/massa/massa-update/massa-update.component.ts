import { Component, OnInit } from '@angular/core';
import { MassaService } from '../massa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Massa } from '../massa.model';

@Component({
  selector: 'app-massa-update',
  templateUrl: 'massa-update.component.html',
  styleUrls: ['massa-update.component.css']
})
export class MassaUpdateComponent implements OnInit {

  massa: Massa

  constructor(private massaService: MassaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.massaService.readById(id).subscribe(massa => {
      this.massa = massa
    });
  }

  updateMassa(): void {
    this.massaService.update(this.massa).subscribe(() => {
      this.massaService.showMessage('Dados atualizados com sucesso!')
      this.router.navigate(['/massas'])
    });
  }

  cancel(): void {
    this.router.navigate(['/massas'])
  }
}
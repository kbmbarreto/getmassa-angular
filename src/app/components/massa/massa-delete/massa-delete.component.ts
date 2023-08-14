import { Component, OnInit } from '@angular/core';
import { Massa } from '../massa.model';
import { MassaService } from '../massa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-massa-delete',
  templateUrl: './massa-delete.component.html',
  styleUrls: ['./massa-delete.component.css']
})
export class MassaDeleteComponent implements OnInit {

  massa: Massa

  constructor(private massaService: MassaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.massaService.readById(id).subscribe(massa => {
      this.massa = massa
    });
  }

  deleteMassa(): void {
    this.massaService.delete(this.massa.id).subscribe(() => {
      this.massaService.showMessage('Massa excluída com sucesso!')
      this.router.navigate(['/massas'])
    })
  }

  cancel(): void {
    this.router.navigate(['/massas'])
  }
}

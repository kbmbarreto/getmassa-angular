import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-massas',
  templateUrl: './massas.component.html',
  styleUrls: ['./massas.component.css']
})
export class MassasComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Massas de Teste',
      icon: 'local_pizza',
      routeUrl: '/massas'
    }
  }

  ngOnInit(): void {
  }

  navigateToMassasCreate(): void {
    this.router.navigate(['/massas/create'])
  }

}

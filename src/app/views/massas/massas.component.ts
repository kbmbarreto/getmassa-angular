import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-massas',
  templateUrl: './massas.component.html',
  styleUrls: ['./massas.component.css']
})
export class MassasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToMassasCreate(): void {
    this.router.navigate(['/massas/create'])
  }

}

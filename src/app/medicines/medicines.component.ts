import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medicines',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './medicines.component.html',
  styleUrl: './medicines.component.css'
})
export class MedicinesComponent {

}

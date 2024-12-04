import { Component, OnInit } from '@angular/core';
import { Departamento } from '../../models/departamento.model';
import { DepartamentoService } from '../../services/departamento-local/departamento.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deparamentos-peru',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deparamentos-peru.component.html',
  styleUrl: './deparamentos-peru.component.css'
})
export class DeparamentosPeruComponent implements OnInit{
  departamentos: Departamento[] = [];

  constructor(private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
    this.getDepartamentos();
  }

  getDepartamentos(): void {
    console.log('Calling getDepartamentos');
    this.departamentoService.getDepartamentos().subscribe(
      (data: Departamento[]) => {
        console.log('Received departamentos:', data);
        this.departamentos = data;
      },
      (error: any) => {
        console.error('Error fetching departamentos', error);
      }
    );
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfiguracionPaginacion } from 'src/shared/paginator';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css'],
  providers: [
    { provide: MatPaginatorIntl, useValue: ConfiguracionPaginacion() }],
})
export class CotizadorComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<Elemento>([]);
  displayedColumns: string[] = ['tipo', 'alto', 'ancho', 'profundidad', 'accion'];
  constructor() { }

  ngOnInit(): void {
  }

  agregarElemento(){

  }

  cotizar(){

  }

  modificarElemento(elemento: Elemento){

  }
  eliminarElemento(elemento: Elemento){

  }


}

interface Elemento {
  tipo?: string;
  alto?: number;
  ancho?: number;
  profundidad?: number;
}

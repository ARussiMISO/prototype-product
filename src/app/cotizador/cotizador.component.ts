import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfiguracionPaginacion } from 'src/shared/paginator';
import { ElementoPopupComponent } from '../elemento-popup/elemento-popup.component';

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
  displayedColumns: string[] = ['tipo', 'alto', 'ancho', 'profundidad', 'cantidad', 'accion'];
  elementos: Elemento[] = [];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  agregarElemento() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'mat-dialog-container-custom-tabla';

    const dialogRef = this.dialog.open(ElementoPopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.agregarElementoTabla(result);
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
  agregarElementoTabla(result: Elemento) {
    if (result.id == 0) {
      result.id = this.elementos.length + 1;
      this.elementos.push(result);
    } else {
      let indexElemento = this.elementos.findIndex(e => e.id == result.id);
      this.elementos[indexElemento].alto = result.alto;
      this.elementos[indexElemento].ancho = result.ancho;
      this.elementos[indexElemento].profundidad = result.profundidad;
      this.elementos[indexElemento].cantidad = result.cantidad;
    }
    console.log(this.elementos);
    this.cargarTabla();
  }

  cargarTabla() {
    this.dataSource = new MatTableDataSource<Elemento>(this.elementos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  cotizar() {
    //TODO

  }

  modificarElemento(elemento: Elemento) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'mat-dialog-container-custom-tabla';
    dialogConfig.data = elemento
    const dialogRef = this.dialog.open(ElementoPopupComponent, dialogConfig);
    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.agregarElementoTabla(result);
        }
      },
      error: (e) => {
        console.log(e);
      },
    });

  }
  eliminarElemento(elemento: Elemento) {
    this.elementos.splice(this.elementos.findIndex(e => e.id == elemento.id), 1);
    console.log(this.elementos);
    this.cargarTabla();
  }


}

interface Elemento {
  tipo?: string;
  alto?: number;
  ancho?: number;
  profundidad?: number;
  cantidad?: number;
  id?: number;
}

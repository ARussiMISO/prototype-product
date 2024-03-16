import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ConfiguracionPaginacion } from 'src/shared/paginator';
const CARRY = "Carry";
const TURBO = "Turbo";
const CAMION = "Camión";
@Component({
  selector: 'app-buscador-servicio',
  templateUrl: './buscador-servicio.component.html',
  styleUrls: ['./buscador-servicio.component.css'],
  providers: [
    { provide: MatPaginatorIntl, useValue: ConfiguracionPaginacion() }],
})
export class BuscadorServicioComponent implements OnInit, AfterViewInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource<Elemento>([]);
  displayedColumns: string[] = ['imagen', 'nombre', 'tipoVehiculo', 'experiencia', 'calificacion', 'accion'];
  rating: Map<number, string> = new Map([
    [1, "1 estrella"],
    [2, "2 estrellas"],
    [3, "3 estrellas"],
    [4, "4 estrellas"],
    [5, "5 estrellas"],
  ]);

  vehiculos = [CARRY, TURBO, CAMION];
  filteredValues = { nombre: '', tipoVehiculo: '', experiencia: '', calificacion: '' };
  listaElementos: Elemento[] = [
    { imagen: "assets/imagenes/mudanza1.jpg", nombre: "Ibarra LTDA", tipoVehiculo: CARRY, experiencia: 2, calificacion: 3 },
    { imagen: "assets/imagenes/mudanza2.jpg", nombre: "Sanchez Asociados", tipoVehiculo: CARRY, experiencia: 10, calificacion: 2 },
    { imagen: "assets/imagenes/mudanza1.jpg", nombre: "Carmelo Mudanzas", tipoVehiculo: CAMION, experiencia: 7, calificacion: 5 },
    { imagen: "assets/imagenes/mudanza3.jpg", nombre: "Villas SA", tipoVehiculo: TURBO, experiencia: 6, calificacion: 3 },
    { imagen: "assets/imagenes/mudanza2.jpg", nombre: "Caracas Mudanzas", tipoVehiculo: CAMION, experiencia: 9, calificacion: 5 },
    { imagen: "assets/imagenes/mudanza1.jpg", nombre: "Internacional LTDA", tipoVehiculo: CARRY, experiencia: 21, calificacion: 3 },
    { imagen: "assets/imagenes/mudanza2.jpg", nombre: "CYB Asociados", tipoVehiculo: CARRY, experiencia: 13, calificacion: 2 },
    { imagen: "assets/imagenes/mudanza1.jpg", nombre: "Mudanzas Chico", tipoVehiculo: CAMION, experiencia: 17, calificacion: 5 },
    { imagen: "assets/imagenes/mudanza3.jpg", nombre: "Mudango", tipoVehiculo: TURBO, experiencia: 4, calificacion: 1 },
    { imagen: "assets/imagenes/mudanza2.jpg", nombre: "Coveñas SA", tipoVehiculo: CAMION, experiencia: 5, calificacion: 5 },
    { imagen: "assets/imagenes/mudanza1.jpg", nombre: "Vega LTDA", tipoVehiculo: TURBO, experiencia: 1, calificacion: 3 },
    { imagen: "assets/imagenes/mudanza2.jpg", nombre: "Torres & Son", tipoVehiculo: TURBO, experiencia: 11, calificacion: 4 },
    { imagen: "assets/imagenes/mudanza1.jpg", nombre: "Maria Transporte", tipoVehiculo: CAMION, experiencia: 7, calificacion: 4 },
    { imagen: "assets/imagenes/mudanza3.jpg", nombre: "Colsubsidio TR", tipoVehiculo: TURBO, experiencia: 6, calificacion: 3 },
    { imagen: "assets/imagenes/mudanza2.jpg", nombre: "Mudanzas Vary", tipoVehiculo: CARRY, experiencia: 9, calificacion: 5 }

  ]
  constructor(private toastrservice: ToastrService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Elemento>(this.listaElementos);
    this.dataSource.filterPredicate = this.customFilterPredicate();
  }

  customFilterPredicate() {
    const myFilterPredicate = function (data: Elemento, filter: string): boolean {
      console.log("Filter:\n" + filter);

      let searchString = JSON.parse(filter);
      let nombreEncontrado = data.nombre?.toString().trim().toLowerCase().indexOf(searchString.nombre.toLowerCase()) !== -1;
      let tipoEncontrado = data.tipoVehiculo?.toString().toLowerCase().indexOf(searchString.tipoVehiculo.toLowerCase()) !== -1;
      let experienciaEncontrada = data.experiencia?.toString().indexOf(searchString.experiencia.toString()) !== -1;
      let calificacionEncontrada = data.calificacion?.toString().indexOf(searchString.calificacion.toString()) !== -1;

      if (searchString.topFilter) {
        return nombreEncontrado || tipoEncontrado || experienciaEncontrada || calificacionEncontrada;
      } else {
        return nombreEncontrado && tipoEncontrado && experienciaEncontrada && calificacionEncontrada;
      }
    }
    return myFilterPredicate;
  }


  verDetalle(elemento: Elemento) {
    this.toastrservice.info("Disculpa. Aún estamos trabajando en esta funcionalidad, por el momento no puedes acceder al detalle de la empresa " + elemento.nombre + ".")

  }

  nombreFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('Valor filtro nombre: ' + filterValue);
    this.filteredValues['nombre'] = filterValue;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  tipoVehiculoFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('Valor filtro tipoVehiculo: ' + filterValue);
    this.filteredValues['tipoVehiculo'] = filterValue;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  experienciaFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('Valor filtro experiencia: ' + filterValue);
    this.filteredValues['experiencia'] = filterValue;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }

  calificacionFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('Valor filtro calificacion: ' + filterValue);
    this.filteredValues['calificacion'] = filterValue;
    this.dataSource.filter = JSON.stringify(this.filteredValues);
  }



}


interface Elemento {
  imagen?: string;
  nombre?: string;
  tipoVehiculo?: string;
  experiencia?: number;
  calificacion?: number;
}

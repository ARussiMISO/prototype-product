import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-elemento-popup',
  templateUrl: './elemento-popup.component.html',
  styleUrls: ['./elemento-popup.component.css']
})
export class ElementoPopupComponent implements OnInit {

  tipos: string[] = [
    "Nevera",
    "Lavadora",
    "Mesa pequeña/Mesa de noche",
    "Comedor",
    "Caja",
    "Silla",
    "Cama + colchón"
  ]
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<ElementoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Elemento) { }

  ngOnInit(): void {
    this.crearFormulario();
    if (this.data) this.cargarElemento();
  }
  cargarElemento() {
    this.form.patchValue({
      tipo: this.data.tipo,
      alto: this.data.alto,
      ancho: this.data.ancho,
      profundidad: this.data.profundidad,
      cantidad: this.data.cantidad
    });
  }
  crearFormulario() {
    this.form = this.formBuilder.group({
      tipo: ['', [Validators.required]],
      alto: ['', [Validators.required, Validators.max(300), Validators.min(1)]],
      ancho: ['', [Validators.required, Validators.max(300), Validators.min(1)]],
      profundidad: ['', [Validators.required, Validators.max(300), Validators.min(1)]],
      cantidad: ['', [Validators.required, Validators.max(300), Validators.min(1)]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  agregarElemento() {
    if (this.data) {
      let elementoModificado: Elemento = {
        tipo: this.form.value.tipo,
        alto: this.form.value.alto,
        ancho: this.form.value.ancho,
        profundidad: this.form.value.profundidad,
        cantidad: this.form.value.cantidad,
        id: this.data.id
      };
      this.dialogRef.close(elementoModificado);
    }
    else {
      let elementoNuevo: Elemento = {
        tipo: this.form.value.tipo,
        alto: this.form.value.alto,
        ancho: this.form.value.ancho,
        profundidad: this.form.value.profundidad,
        cantidad: this.form.value.cantidad,
        id: 0
      };
      this.dialogRef.close(elementoNuevo);
    }


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


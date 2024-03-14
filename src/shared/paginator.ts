import { MatPaginatorIntl } from "@angular/material/paginator";

const spRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 de ${length}`; }

  length = Math.max(length, 0);
  const startIndex = page * pageSize;
  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} de ${length}`;
}


export function ConfiguracionPaginacion() {

  const configPaginadorIntl = new MatPaginatorIntl();
  configPaginadorIntl.itemsPerPageLabel = 'Registros:';
  configPaginadorIntl.nextPageLabel = 'Página Siguiente';
  configPaginadorIntl.previousPageLabel = 'Página Anterior';
  configPaginadorIntl.firstPageLabel = 'Primera página';
  configPaginadorIntl.lastPageLabel = 'Última página';
  configPaginadorIntl.getRangeLabel = spRangeLabel;

  return configPaginadorIntl;

}

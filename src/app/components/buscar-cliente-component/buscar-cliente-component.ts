import id from '@angular/common/locales/id';
import { ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import { Clientes } from '../../models/cliente';

@Component({
  selector: 'app-buscar-cliente-component',
  standalone: false,
  styleUrl: './buscar-cliente-component.css',
  templateUrl: './buscar-cliente-component.html',
})
export class BuscarClienteComponent {
@ViewChild("cajaid") cajaid!: ElementRef;
cliente!: Clientes;




constructor(
  private cdr: ChangeDetectorRef
) {}
async mostrarClientes(): Promise<void>{
  let idcliente = parseInt(this.cajaid.nativeElement.value);
  let ruta = "documents/clientesdatos.json";
  let response = await fetch(ruta);
  let datos = await response.json();
  for (let elemento of datos){
    if(elemento.idcliente == idcliente){
      this.cliente = new Clientes(elemento.idcliente, elemento.nombre, elemento.paginaweb, elemento.imagencliente)
    }
  }
  this.cdr.detectChanges();
}
}
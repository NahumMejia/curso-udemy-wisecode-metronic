import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SucursalService } from '../service/sucursal.service';

@Component({
  selector: 'app-create-sucursal',
  templateUrl: './create-sucursal.component.html',
  styleUrls: ['./create-sucursal.component.scss']
})
export class CreateSucursalComponent {


    @Output() SucursalC: EventEmitter<any> = new EventEmitter();
    name: String = '';
    address: string = '';
    isLoading : any;

  
    constructor(
      public modal:NgbActiveModal, 
      public sucursalService: SucursalService, 
      public toast: ToastrService,
    
    ){
       
    }
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit():void {
  
 
    }
  
      store(){
      if(!this.name){
      this.toast.error("Validacion", "El nombre de la Sucursal es requerido");
        return false;
    }
   
      let data = {
        name: this.name,
        addres: this.address,
       
      }
      this.sucursalService.registerSucursal(data).subscribe((resp:any)=> {
          console.log(resp)
          if(resp.message == 403){
            this.toast.error('Validacion',resp.message_text);
          }else{
            this.toast.success("Éxito","La sucursal  se registró correctamente");
            this.SucursalC.emit(resp.sucursal);
            this.modal.close(); 
          }
      })
  
    }
  }



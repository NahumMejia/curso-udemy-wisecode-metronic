import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SIDEBAR } from 'src/app/config/config';
import { RolesService } from '../service/roles.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-roles',
  templateUrl: './create-roles.component.html',
  styleUrls: ['./create-roles.component.scss']
})
export class CreateRolesComponent {
  name: String = '';
  SIDEBAR: any = SIDEBAR;
  isLoading : any;
  permisions : any = [];

  constructor(public modal:NgbActiveModal, public roleService: RolesService, public toast: ToastrService,){
     
  }
  ngOnInit():void {

  }
  addPermission(permiso:string){
    let INDEX = this.permisions.findIndex((perm:string)=> perm == permiso);
    if (INDEX != -1){
      this.permisions.splice(INDEX,1);
    }else{
      this.permisions.push(permiso);
    }
    console.log(this.permisions);
  }


  store(){
    if(!this.name){
    this.toast.error("Validacion", "El nombre es requerido");
      return false;
  }
  if(this.permisions.length == 0){
    this.toast.error("Validacion", "Necesitas seleccionar un permiso");
    return false;
  }
    let data = {
      name: this.name,
      permisions: this.permisions,
    }
    this.roleService.registerRole(data).subscribe((resp:any)=> {
        console.log(resp)
    })

  }
}

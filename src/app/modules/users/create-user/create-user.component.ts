import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  @Output() UserC: EventEmitter<any> = new EventEmitter();
  
  isLoading : any;

  name: String = '';
  surname: String = '';
  email: String = '';
  phone: String = '';
  role_id: string = '';
  gender: string = '';
  type_document: string = 'DNI';
  n_document: string = '';
  address: string = '';
  constructor(public modal:NgbActiveModal,
  public usersService: UsersService,
  public toast: ToastrService,){
     
  }
  ngOnInit():void {

  }
  processFile($event:any){

  }
  store(){
    if(!this.name){
    this.toast.error("Validacion", "El nombre es requerido");
      return false;
  }

    let data = {
      name: this.name,
    }
    this.usersService.registerUser(data).subscribe((resp:any)=> {
        console.log(resp)
        if(resp.message == 403){
          this.toast.error('Validacion',resp.message_text);
        }else{
          this.toast.success("Éxito","El usuario se ha registrado correctamente");
          this.UserC.emit(resp.user);
          this.modal.close();
        }
    })
  }
}
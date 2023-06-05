// import { InjectionToken } from '@angular/core';

// export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');

// export interface Toastr {
//   success(msg: string, title: string): void;
//   info(msg: string, title: string): void;
//   warning(msg: string, title: string): void;
//   error(msg: string, title: string): void;
// }

import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }
  
  showSuccess(message: string){
    this.toastr.success("Success", message)
  }
  
  showError(message: string){
    this.toastr.error("Error", message)
  }
  
  showInfo(message: string){
    this.toastr.info("Info", message)
  }
  
  showWarning(message: string){
    this.toastr.warning("Warning", message)
  }
}
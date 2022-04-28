import { Injectable } from '@angular/core';
import Swal from "sweetalert2";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  generateId(length = 12) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  showAlert(title: string, text: string, type: 'success' | 'error' | 'warning' | 'info') {
    Swal.fire({
      title: title,
      text: text,
      icon: type,
      confirmButtonText: 'OK',
      confirmButtonColor: (type === "error") ? environment.swal.cancelButtonColor : environment.swal.confirmButtonColor,
      background: environment.swal.background,
      color: environment.swal.color
    }).then();
  }
}

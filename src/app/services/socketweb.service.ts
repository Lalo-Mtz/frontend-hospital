import { EventEmitter, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketwebService extends Socket {

  outEven: EventEmitter <any> = new EventEmitter();
  callback: EventEmitter <any> = new EventEmitter();

  constructor() {
    super({
      url: 'http://localhost:3200',
      options: {
        query: {
          nameRoom: 'startHospital'  //sala
        }
      }
    })

    this.listen();
   }

   listen = () => {
    this.ioSocket.on('event', (res:any) => {
      this.callback.emit(res)
    })
  }

  emitEvent = (payload = {}) => {
    this.ioSocket.emit('event', payload);
  }
}

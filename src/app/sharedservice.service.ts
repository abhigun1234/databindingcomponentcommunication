import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  message=''
  constructor() { }

  public setData(message:string)
  {
    this.message=message
  }
  public getData()
  {
    return this.message
  }
}

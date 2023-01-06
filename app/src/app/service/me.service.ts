import { Injectable } from '@angular/core';

interface Me {
  name:string
  resumeText:string
  resumeLink:string
}
interface ContactDetails {
  address:string
  mobileNumber:string
  email:string
}


@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor() { }
}

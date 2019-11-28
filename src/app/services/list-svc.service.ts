import { Injectable } from '@angular/core';

@Injectable()
export class ListSvcService {
  list:any = [
    { name: 'Joe' },
    { name: 'Niel' },
    { name: 'Gee' },
    { name: 'Amber' },
    { name: 'Chio' }
  ];
  constructor() { }
  getList(){
    return this.list
  }
  putList(pname){
    this.list.push(
    {
      name: pname
    }
    );
  }
  deleteOneList(doname){
    this.list.splice(doname,1)
  }
  deleteList(){
    this.list = []
  }
  editOne(i, ename){
    this.list.splice(i, 1, {name:ename});
  }
}

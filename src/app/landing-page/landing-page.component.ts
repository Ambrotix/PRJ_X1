import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListSvcService } from 'app/services/list-svc.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  name: string;
  selected:any={
      id: 1, name: 'Joe'
    }
  
  list:any = [];
  id: number;
  trigAddNew:boolean=true;
  constructor(private router:Router, private listSvc:ListSvcService) { }

  ngOnInit() {
    this.list = this.listSvc.getList();
  }


  clear(){
    this.listSvc.deleteList();
    this.list = this.listSvc.getList()
    this.selected = []
    this.trigAddNew = false
  }

  
  clearNew(){
    this.selected = [];
    this.trigAddNew = false;
  }

  addNew(){
    // this.id = this.list.length + 1
    // this.list.push(
    //   {
    //     id: this.id,
    //     name: this.selected.name
    //   }
    //   );
    this.listSvc.putList(this.selected.name)
    this.list = this.listSvc.getList()
    this.trigAddNew = true;
  }

  onSelect(i, ename){
    this.router.navigate(["../home/edit", i, ename])
  }

  delete(name){
    this.router.navigate(["../home/delete", name])
    // this.list.splice(i,1)
    // this.selected = [];
    // this.list = this.listSvc.getList();
  }
}

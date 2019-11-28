import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListSvcService } from 'app/services/list-svc.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editName:string;
  editIndex:number;
  constructor(private router:Router, private route:ActivatedRoute, private listSvc:ListSvcService) { }

  ngOnInit() {
    this.editName = this.route.snapshot.params['name'];
    this.editIndex= this.route.snapshot.params['i'];
  }
  save(){
    // window.alert("Are you sure you want to delete "+this.deleteName+"?")
    if (confirm("Are you sure you want to save changes?")){
      this.listSvc.editOne(this.editIndex,this.editName)
      this.router.navigate(["../home"])
    }else{
      console.log("canceled")
    }
  }
  back(){
    // this.router.navigate(["../home"])
    if (confirm("Are you sure you want to disregard changes?")){
      // this.listSvc.deleteOneList(this.editName)
      this.router.navigate(["../home"])
    }else{
      console.log("canceled")
    }
  }

}

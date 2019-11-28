import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListSvcService } from 'app/services/list-svc.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deleteName:string;
  constructor(private router:Router, private route:ActivatedRoute, private listSvc:ListSvcService) { }

  ngOnInit() {
    this.deleteName = this.route.snapshot.params['name'];
  }
  delete(){
    // window.alert("Are you sure you want to delete "+this.deleteName+"?")
    if (confirm("Are you sure you want to delete "+this.deleteName+"?")){
      this.listSvc.deleteOneList(this.deleteName)
      this.router.navigate(["../home"])
    }else{
      console.log("canceled")
    }
  }
  back(){
    this.router.navigate(["../home"])
  }
}

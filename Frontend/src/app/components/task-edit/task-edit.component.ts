import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  id:any;
  data:any;
  task=new Task();
  constructor(private route:ActivatedRoute,private dataService:DataService) { }

  ngOnInit(): void {
   // console.log(this.route.snapshot.params['id']);
   this.id=this.route.snapshot.params['id'];
   this.getData();

  }
  

  getData(){
    this.dataService.getTaskbtId(this.id).subscribe(res=>{
      //console.log(res);
      this.data=res;
      this.task=this.data;
    })
  }

  updateTask(){
    this.dataService.updateTask(this.id,this.task).subscribe(res=>{
      alert("Your Task Updated..!");
      window.location.replace('/');
    });
  }

}

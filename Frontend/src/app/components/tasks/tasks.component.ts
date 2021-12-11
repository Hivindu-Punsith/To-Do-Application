import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:any;

  task=new Task();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getTaskData();
  }

  getTaskData(){
    this.dataService.getData().subscribe(res=>{
    this.tasks=res;

    });

  }

  insertData(){
    this.dataService.insertData(this.task).subscribe(res=>{
      alert("Your Task Added..!");
      this.getTaskData();
  })
  }

  deleteData(id: any){
    this.dataService.deleteData(id).subscribe(res=>{
      alert("Your Task Deleted..!");
      this.getTaskData();
    })
  }

  Search(){
    if(this.tasks!=""){
      this.tasks=this.tasks['filter']((res: any)=>{
        return res.task.toLocaleLowerCase().match(this.task['toLocaleLowerCase']());
      });
    }else if(this.tasks==""){
        this.ngOnInit();
    }
  }
}
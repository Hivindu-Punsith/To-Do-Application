import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

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
      window.location.replace('/');
  })
  }

}

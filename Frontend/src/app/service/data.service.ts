import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/tasks');
  }

  insertData(data: Task){
    return this.httpClient.post('http://127.0.0.1:8000/api/addtask',data);
  }

  deleteData(id: Task){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteTask/'+id);
  }

  getTaskbtId(id: Task){
    return this.httpClient.get('http://127.0.0.1:8000/api/task/'+id);
  }

  updateTask(id: any,data: any){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateTask/'+id,data);
  }
}

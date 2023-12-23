import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BehaviourServiceService } from '../../../services/behaviour-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behaviour-subject-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './behaviour-subject-example.component.html',
  styleUrl: './behaviour-subject-example.component.css'
})
export class BehaviourSubjectExampleComponent implements OnInit{
  value:string = ''

  constructor(private behaviourService:BehaviourServiceService){

  }

  ngOnInit(){
    const slNumber = this.behaviourService.serialNumberBehaviour$.subscribe(res=>{
      this.value = res;
    })
  }

  updateBehaviourValue(){
    this.behaviourService.updateValue(this.value);
  }
}

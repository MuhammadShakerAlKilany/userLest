import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!:User;
  @Output() activEvenSendUserName= new EventEmitter()
  faStar=faStar
  // userActive:boolean=false
  constructor(){}
  ngOnInit(): void {
    
    console.log(this.user)
  }
  active(id:number){
    this.activEvenSendUserName.emit(id)
    
    
  }
}

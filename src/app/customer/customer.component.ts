import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FreezeRoleComponent } from '../freeze-role/freeze-role.component';
import { RatingForCustomerComponent } from '../rating-for-customer/rating-for-customer.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  mymodel
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  action(value){
    console.log(value)
    if(value=='rating'){
      const dialogRef = this.dialog.open(RatingForCustomerComponent,{
        width:"50%",
        data:"customer"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
     if(value=='freeze'){
      const dialogRef = this.dialog.open(FreezeRoleComponent,{
        width:"50%",
        data:"customer"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
    }
  }

//FreezeRoleComponent
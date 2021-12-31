import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApprovedModelComponent } from '../approved-model/approved-model.component';
import { DenyProductComponent } from '../deny-product/deny-product.component';
import { FreezedModelComponent } from '../freezed-model/freezed-model.component';
import { SuccessfulModelComponent } from '../successful-model/successful-model.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
addProduct(){
    this.router.navigate(['add-product']);   
  }
  action(value){
    console.log(value)
    if(value=='deny'){
      const dialogRef = this.dialog.open(DenyProductComponent,{
        width:"50%",
        data:"product"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
     if(value=='approve'){
      const dialogRef = this.dialog.open(ApprovedModelComponent,{
        width:"30%",
        data:"product"
       });
       dialogRef.afterClosed().subscribe(result => {
         console.log(`Dialog result: ${result}`);
       });
     }
    }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteModelComponent } from '../delete-model/delete-model.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addUser(){
    this.router.navigate(['add-user']);   
  }


    
deleteModel(){
  const dialogRef = this.dialog.open(DeleteModelComponent, {
    width: '25%',
    data:"user"
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessfulModelComponent } from '../successful-model/successful-model.component';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
 addAdminGroup:FormGroup
 submitted = false;
  constructor(private fb:FormBuilder, public dialog: MatDialog) {
    this.addAdminGroup = this.fb.group({
      "user": ['',Validators.required],
      "email": ['',Validators.required],
      "role": ['',Validators.required],
      "id":['',Validators.required],
      "status":['',Validators.required],
      "password": ['',Validators.required],
      "confirm": ['',Validators.required],
    })
   }

  ngOnInit(): void {
  }
  addAdminSubmit(){
    this.submitted = true;
    if (this.addAdminGroup.invalid) {
      return;
    }
    console.log('this.addAdminGroup.value',this.addAdminGroup.value)
    const dialogRef = this.dialog.open(SuccessfulModelComponent ,{
      data:"user"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

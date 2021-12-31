import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccessfulModelComponent } from '../successful-model/successful-model.component';
@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
 addVendorGroup:FormGroup
  constructor(private fb:FormBuilder, public dialog: MatDialog,private router:Router) { 
    this.addVendorGroup = this.fb.group({
      "storename": ['Enter Full Store Name',Validators.required],
      "category": ['',Validators.required],
      "phone":['Enter Phone Number',Validators.required],
      "email":['Enter Email Id',Validators.required],
      "gst":['Enter GST Number',Validators.required],
      "pan":['Enter Pan Number',Validators.required],
      "country":['',Validators.required],
      "state":['',Validators.required],
      "city":['',Validators.required],
      "locality":['',Validators.required],
      "address":['Enter Address',Validators.required],
      "managername" :['Enter Manager Name',Validators.required],
      "manageremail" :['Enter Manager Email Id',Validators.required],
      "managerPhone" :['Enter Manager Phone',Validators.required],
      "aboutstore":['',Validators.required],
     
    })
  }

  ngOnInit(): void {
  }
  addVendorSubmit(){
    const dialogRef = this.dialog.open(SuccessfulModelComponent ,{
      data:"vendor"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
    console.log('this.addVendorGroup.value',this.addVendorGroup.value)
  }
  onBoarding(){
    this.router.navigate(['vendor-policies-view']);   
  }

 
}

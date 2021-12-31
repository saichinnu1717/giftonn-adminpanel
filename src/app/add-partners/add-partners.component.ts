import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-partners',
  templateUrl: './add-partners.component.html',
  styleUrls: ['./add-partners.component.scss']
})
export class AddPartnersComponent implements OnInit {
  addPartnersGroup:FormGroup
  constructor(private fb:FormBuilder) { 
    this.addPartnersGroup = this.fb.group({
      "partnersName":['',Validators.required],
      "partnersEmail":['',Validators.required],
      "partnersCategory":['',Validators.required],
      "partnersSubCategory":['',Validators.required], 
      "contactNumber":['',Validators.required], 
      "country":['',Validators.required],
      "state":['',Validators.required],  
      "city":['',Validators.required], 
    })
  }

  ngOnInit(): void {
  }
  addPartnersSubmit(){
    console.log(this.addPartnersGroup.value)
  }
  handleChange(files: FileList) {}
}

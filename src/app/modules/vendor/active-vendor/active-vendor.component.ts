import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup} from '@angular/forms';
import{FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-active-vendor',
  templateUrl: './active-vendor.component.html',
  styleUrls: ['./active-vendor.component.scss']
})
export class ActiveVendorComponent implements OnInit {

  //public form:FormGroup;
registerForm= new FormGroup({
  name:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),
  bio:new FormControl('',Validators.required),
  //la:new FormControl('',Validators.required)

});
get name()
{
  return this.registerForm.get('name');
}
get email()
{
  return this.registerForm.get('email');
}
get bio()
{
  return this.registerForm.get('bio');
}

title='validation';
submitted=false;

constructor() { }



  ngOnInit(): void {

  }
  myVal!:any;
  onSubmit(){
    this.myVal=this.registerForm.value;
    this.submitted=true;
    if(this.registerForm.invalid){
    return
    
  }
  alert("Success");
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

}
}

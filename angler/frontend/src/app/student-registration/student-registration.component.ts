import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})


export class StudentRegistrationComponent {
  reactiveForm: FormGroup;

  registerDetails: any = {
    student_name: '',
    student_code: '',
    department: '',
    gender: 'male',
    email_id: '',
    dob:""
  }


  genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    public spinner: NgxSpinnerService,
    private router: Router,
    public formBuilder: FormBuilder,


    ) { this.reactiveForm = this.formBuilder.group({
    })
  }

    
  ngOnInit(): void {
  }

  onSubmit() {
    // this.spinner.show()
    this.http.post('http://localhost:8080/users/student_register', this.registerDetails).subscribe((res: any) => {
      console.log(this.registerDetails)
      if (res.status) {
        this.spinner.hide()
        this.toastr.success('Success!', res.message);
        this.router.navigate(['/register_students_list']);
        // this.registerDetails = {}; // reset the form
      } else {
        this.spinner.hide()
        this.toastr.error('Error!', res.message)
      }
    })
  }
}

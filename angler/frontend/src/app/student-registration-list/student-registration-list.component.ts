import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

interface Student {
  id: number;
  student_name: string;
  student_code: number;
  department: string;
  gender: string;
  email_id: string;
  dob: string;
}
@Component({
  selector: 'app-student-registration-list',
  templateUrl: './student-registration-list.component.html',
  styleUrls: ['./student-registration-list.component.scss']
})
export class StudentRegistrationListComponent {

  students: Student[] = [];
  data: any=[];


  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    ) {}

    
  ngOnInit(): void {
    this.fetchStudentDetails();
    
  }
  fetchStudentDetails() {
    this.http.get<any>('http://localhost:8080/users/get_student_details').subscribe(response => {
      if (response.status) {
        this.students = response.data;
        console.log(this.students);
      } else {
        // Handle error or display a message
      }
    });
  }
}

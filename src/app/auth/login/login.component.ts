import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/app-core/services/auth.service';

@Component({
  selector: 'soundar-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

}

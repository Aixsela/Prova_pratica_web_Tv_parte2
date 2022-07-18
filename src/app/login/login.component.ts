import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../models/user';
import { UsersService } from '../users.service';
import { catchError, of } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: LoginDto = new LoginDto();

  message = "";
  
  
  constructor( private userService: UsersService) { }

  ngOnInit(): void {
  }


  // Invio dati al db json
  onSubmit() {
    this.userService.login(this.user)
    .pipe(
      catchError(errore => {
        return of(undefined);
      })
      )
    .subscribe(risposta => {
      if ( risposta!= undefined) {
        this.user = new LoginDto();
        this.message = "";
      } else {
        this.message = "Email o password non validi";
      }
    });
  }

  

}

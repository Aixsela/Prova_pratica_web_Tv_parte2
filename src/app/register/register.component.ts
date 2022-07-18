import { Component, OnInit } from '@angular/core';
import { RegisterDto } from '../models/user';
import { UsersService } from '../users.service';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: RegisterDto = new RegisterDto();



  constructor(private userService : UsersService) { }


  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confermaPassword');

    return password?.value === confirmPassword?.value ? null : { notmatched: true };
  };


  //Validazione campi form

  registerForm = new FormGroup({
    nome: new FormControl(""),
    cognome: new FormControl(""),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern("^([a-zA-Z0-9@*#]{8,15})$")]),
    confermaPassword: new FormControl("",[Validators.required]),
  }, 
    { validators: this.passwordMatchingValidatior }
  );
  

  registerUser() {
    console.log(this.registerForm.valid);
    this.user.nome = this.registerForm.value.nome;
    this.user.cognome = this.registerForm.value.cognome;
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;
    console.log(this.user)

    this.userService.registrazione(this.user)
      .subscribe(risposta => this.user = new RegisterDto()) 
   //TODO: reindirizzamento
  }

  get nome() {
    return this.registerForm.get("nome");
  }
  get cognome() {
    return this.registerForm.get("cognome");
  }

  get email() {
    return this.registerForm.get("email");
  }

  get password() {
    return this.registerForm.get("password");
  }

  get confermaPassword() {
    return this.registerForm.get("confermaPassword");
  }


  isSame() {
    return this.registerForm.get("password") === this.registerForm.get("confermaPassword");
  }


  ngOnInit(): void {
    //  document.getElementById("username")?.focus()
  }



}




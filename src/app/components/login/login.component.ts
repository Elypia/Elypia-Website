import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {RegisterationForm} from '../../classes/forms/registeration-form';
import {UserService} from '../../services/user/user.service';
import {LoadState} from '@elypia/elypian-angular';
import {ActivatedRoute} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';

class PasswordErrorMatcher implements ErrorStateMatcher {

  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.invalid;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public readonly matcher: PasswordErrorMatcher = new PasswordErrorMatcher();

  public submissionState: LoadState = LoadState.NotLoaded;
  public registerationForm: RegisterationForm = new RegisterationForm();
  public registering: boolean = false;
  public newEmail: boolean = false;
  public rememberMe: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.registering = params.get('registering') === 'true' || false;
    });
  }

  public checkEmailExists(): void {
    if (!this.registerationForm.email)
      return;

    this.userService.exists(this.registerationForm.email).subscribe((exists) => {
      this.newEmail = !exists;
      this.registering = !exists;
    });
  }

  public onSubmit(): void {
    if (this.submissionState === LoadState.Loading)
      return;

    this.submissionState = LoadState.Loading;

    if (this.registering)
      this.userService.register(this.registerationForm).subscribe(
        () => this.submissionState = LoadState.Loaded,
        () => this.submissionState = LoadState.Failed
      );
  }
}

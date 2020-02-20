/*
 * Copyright 2019-2020 Elypia CIC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {UserService} from '../../user/user.service';
import {LoadState} from '@elypia/ng-elypian';
import {ActivatedRoute} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import LoginForm, {LoginFormType} from './login-form';

class PasswordErrorMatcher implements ErrorStateMatcher {

  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.invalid;
  }
}

/**
 * This is the actual component that allows for logging in.
 * This is not the representation of the page that users will use to login-form however.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public LoginFormType = LoginFormType;

  /** The state when to say the verify password field doesn't match. */
  public readonly matcher: PasswordErrorMatcher = new PasswordErrorMatcher();

  /** If the user is registring for a new account, swaps between login-form/register view. */
  @Input() public formType: LoginFormType = LoginFormType.LOGIN;

  /** The currently state within authenticating to Elypia. */
  public submissionState: LoadState = LoadState.NotLoaded;

  /** If this is a new email address that Elypia hasn't seen before. */
  public newEmail: boolean = false;

  /** If the user would like their session with Elypia to persist beyond this browser session. */
  public rememberMe: boolean = false;

  public email: string;
  public password: string;
  public verifyPassword: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {

  }

  public checkEmailExists(): void {
    if (!this.email)
      return;

    this.userService.exists(this.email).subscribe((exists) => {
      this.newEmail = !exists;
    });
  }

  public onSubmit(): void {
    if (this.submissionState === LoadState.Loading)
      return;

    this.submissionState = LoadState.Loading;

    if (this.formType === LoginFormType.REGISTER) {
      const form: LoginForm = {
        email: this.email,
        password: this.password,
        verifyPassword: this.verifyPassword
      };

      this.userService.register(form).subscribe(
        () => this.submissionState = LoadState.Loaded,
        () => this.submissionState = LoadState.Failed
      );
    }
  }
}

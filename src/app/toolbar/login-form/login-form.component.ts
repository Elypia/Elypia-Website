/*
 * Elypia Website - The company website for Elypia.
 * Copyright (C) 2019-2019  Elypia CIC
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
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

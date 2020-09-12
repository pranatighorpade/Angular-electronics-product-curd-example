import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Meta, Story } from '@storybook/angular';
import { LoginSignupComponent } from '../app/login-signup/login-signup.component';

export default {
  title: 'Login-Signup component',
  component: LoginSignupComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<LoginSignupComponent> = (args: LoginSignupComponent) => ({
  component: LoginSignupComponent,
  moduleMetadata: {
    imports: [
      CommonModule,
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
    declarations: [LoginSignupComponent],
    providers: [provideMockStore({})],
  },
  props: args,
});
export const Default = Template.bind({});

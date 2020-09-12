import { AppComponent } from '../app/app.component';
import { Meta, Story } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginSignupComponent } from '../app/login-signup/login-signup.component';
import { HeaderComponent } from '../app/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app/app-routing.module';
import { ProductModule } from '../app/products/product.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../app/store/app.states';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../app/store/effects/auth.effects';
import { ProductEffects } from '../app/products/store/effects/product.effects';
import { AuthService } from '../app/services/auth.service';
import { ThemeService } from '../app/theme/theme.service';
import { ProductService } from '../app/products/services/product.service';

export default {
  title: 'App component',
  component: AppComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  moduleMetadata: {
    declarations: [AppComponent, LoginSignupComponent, HeaderComponent],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
      ProductModule,
      HttpClientModule,
      StoreModule.forRoot(reducers, {}),
      EffectsModule.forRoot([AuthEffects, ProductEffects]),
    ],
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' },
      AuthService,
      ThemeService,
      ProductService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  },
  props: { args },
});
export const App = Template.bind({});

import { storiesOf, moduleMetadata, Meta, Story } from '@storybook/angular';
import { HeaderComponent } from '../app/header/header.component';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


export default {
  title: 'Header component',
  component: HeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
    ],
    declarations: [HeaderComponent],
    providers: [provideMockStore()],
  },
  props: {args, isAuthenticated: false},
});

export const Header = Template.bind({});

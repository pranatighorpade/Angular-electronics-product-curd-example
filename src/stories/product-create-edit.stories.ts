import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductCreateEditComponent } from '../app/products/product-create-edit/product-create-edit.component';
import { ProductService } from '../app/products/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

export default {
  title: 'Create-Edit Product List',
  component: ProductCreateEditComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ProductCreateEditComponent> = (
  args: ProductCreateEditComponent
) => ({
  component: ProductCreateEditComponent,
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule,
    ],
    declarations: [ProductCreateEditComponent],
    providers: [provideMockStore(), ProductService],
  },
  props: args,
});

export const Default = Template.bind({});

import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { ProductListComponent } from '../app/products/product-list/product-list.component';
import { ProductService } from '../app/products/services/product.service';
import { HttpClientModule } from '@angular/common/http';


const mockProducts = [
  {
    id: 1,
    productName: 'JBL Headphones ',
    description: 'The new JBL C100SI is ultra-lightweight in-ear headphone',
    price: '599',
    imgUrl: 'https://i.postimg.cc/qB29NkJL/headphone.jpg',
    category: 'Mobile and Accessories',
  },
  {
    id: 2,
    productName: 'LED TV',
    description:
      'Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black)',
    price: '2500',
    category: 'Home Appliances',
    imgUrl: 'https://i.postimg.cc/FRGgQGdN/81t2-A6uhm4-L-SL1500.jpg',
  },
  {
    id: 3,
    productName: 'Speaker',
    description: 'Sony SRS-XB12 Wireless Extra Bass Bluetooth Speaker',
    price: '4000',
    imgUrl: 'https://i.postimg.cc/NFhqWFgy/speaker.jpg',
    category: 'Audio Devices',
  },
  {
    id: 4,
    productName: 'Keyboard',
    description: 'HP 100 Wired USB Keyboard',
    price: '1200',
    imgUrl: 'https://i.postimg.cc/YCQkk14p/81-PLqxtr-J3-L-SX466-keyboard.jpg',
    category: 'Computer and Accessories',
  },
];

export default {
  title: 'Product List',
  component: ProductListComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<ProductListComponent> = (args: ProductListComponent) => ({
  component: ProductListComponent,
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    ],
    declarations: [ProductListComponent],
    providers: [provideMockStore(), ProductService],
  },
  props: { ...args },
});
export const ProductList = Template.bind({});
ProductList.args = {
  products: mockProducts ,
  isAuthenticated : false,
};

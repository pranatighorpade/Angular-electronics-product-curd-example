import {
  LIST_PRODUCTS,
  ADD_PRODUCT,
  AddProduct,
} from '../actions/product.action';
import { Product } from '../../models/product';
import { productReducer } from './product.reducer';

export interface State {
  products: Product[];
  success: boolean | null;
  message: string | null;
}

const payload: Product = {
  id: 1,
  productName: 'JBL Headphones ',
  description:
    'The new JBL C100SI is a dynamic, ultra-lightweight in-ear headphone',
  price: 599,
  imgUrl: 'https://i.postimg.cc/qB29NkJL/headphone.jpg',
  category: 'Mobile and Accessories',
};

describe('initialState', () => {
  test('is correct', () => {
    const action = new AddProduct(payload);
    const initialState = { products: [], message: null, success: null };
    expect(productReducer(undefined, action)).toEqual(initialState);
  });
});

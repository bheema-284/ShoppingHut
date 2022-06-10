const SET_PRODUCTS = 'SET_PRODUCTS';
const SELECTED_PRODUCT = 'SELECTED_PRODUCT';
const REMOVE_SELECTED_PRODUCT = 'REMOVE_SELECTED_PRODUCT';

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeSelectedProducts = (products) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};

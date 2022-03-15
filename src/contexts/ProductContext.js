import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";
import { calcSubPrice, calcTotalPrice } from "../helpers/functions";

export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
  cart: JSON.parse(localStorage.getItem("cart")),
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };
    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    case ACTIONS.CHANGE_CART_LENGTH:
      return { ...state, cartLength: action.payload };
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  const navigate = useNavigate();

  // ! ===================== crud start======================
  const getProducts = async () => {
    let { data } = await axios(`${JSON_API_PRODUCTS}${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  };

  const addProduct = async (newProduct) => {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    getProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  };

  const getProductDetails = async (id) => {
    let { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  };

  const saveEditedProduct = async (newProduct) => {
    await axios.patch(`${JSON_API_PRODUCTS}/${newProduct.id}`, newProduct);
    getProducts();
  };
  // ! ===================== crud end========================

  // Filter
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };
  //filter end

  // ! ================cart start==============
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (item) => item.item.id === product.id
    );
    if (productToFind.length == 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (item) => item.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ACTIONS.GET_CART,
      payload: cart,
    });
  };

  function deleteCartProducts(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
    dispatch({
      type: ACTIONS.CHANGE_CART_LENGTH,
      payload: cart.products.length,
    });
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id == id);
      return newCart.length > 0 ? true : false;
    } else {
      cart = {
        product: [],
        totalPrice: 0,
      };
    }
  }

  // ! ================cart end==============

  const values = {
    getProducts,
    addProduct,
    deleteProduct,
    getProductDetails,
    saveEditedProduct,
    products: state.products,
    productDetails: state.productDetails,

    fetchByParams,

    getCart,
    addProductToCart,
    changeProductCount,
    deleteCartProducts,
    checkProductInCart,
    cart: state.cart,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};
export default ProductContextProvider;

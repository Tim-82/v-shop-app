export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products
  },
  SET_CART: (state, product) => {
    if (state.cart) {
      let isProductExists = false
      state.cart.map(function (item) {
        if (item.article === product.article) {
          isProductExists = true
        }
      })
      if (!isProductExists) {
        state.cart.push(product)
      }
    } else {
      state.cart.push(product)
    }
  },
  DELETE_ITEM_FROM_CART: (state, index) => {
    state.cart.splice(index, 1)
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity++
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity--
    }
  },
  SET_SEARCH: (state, value) => {
    state.searchValue = value
  }
}

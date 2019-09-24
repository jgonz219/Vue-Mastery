var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    inventory: 100,
    inStock: true,
    onSale: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: './assets/vmSocks-blue-onWhite.jpg'
      }
    ],
    cart: 0
  },

  methods: {
    addToCart: function() {
      this.cart += 1

    },
    removeFromCart: function() {
      if (this.cart > 0) {
        this.cart -= 1
      }
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})

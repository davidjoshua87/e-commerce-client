new Vue({
  el: '#app',
  data: {
    stores: [],
    cart: [],
    role: null,
    newItem: {
      name: '',
      price: 0,
      stock: 0,
      filename: '',
    },
    file: null,
    editItem: {
      name: '',
      price: 0,
      stock: 0,
      imageUrl: '',
      editImage: false,
    }
  },

  computed: {
    fileExist: function () {
      console.log('ini file exist')
      console.log(this.file)
      if(this.file == null)
        return '';
      return 'file-there';
    }
  },
  methods: {
    fileSelectHandler: function (event) {
      this.fileDragHover(event);
      this.file = event.target.files || event.dataTransfer.files;
      console.log(`ini event: ${(this.file[0])} - ${(this.formData)}`);
      console.log(this.file);
      console.log(this.formData);
      this.newItem.filename = this.file[0].name;
      if(this.file[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
          $('#previewImage').attr('src', e.target.result);
        }
        reader.readAsDataURL(this.file[0]);
      }
    },
    addItem: function () {
      let formData = new FormData()

      formData.append('image', this.file[0])
      formData.append('name', this.newItem.name)
      formData.append('price', this.newItem.price)
      formData.append('stock', this.newItem.stock)

      axios.post('http://35.198.216.59/items/img', formData, {
          headers: {
            apptoken: localStorage.getItem('apptoken')
          }
        })
        .then(({
          data
        }) => {
          window.location.href = 'index.html'
          console.log(data)
        })
    },
    addEditProduct: function (id) {
      let index = this.stores.map(val => val._id).indexOf(id);
      this.editItem.name = this.stores[index].name;
      this.editItem.price = this.stores[index].price;
      this.editItem.stock = this.stores[index].stock;
      this.editItem.imageUrl = this.stores[index].imageUrl;
    },
    deleteItem: function (itemId) {
      axios({
        method: 'delete',
        url: `http://35.198.216.59/items/${itemId}`
      }).then(data => {
        console.log(data);
        console.log('succeed delete')
        let indexDelete = this.stores.map(val => val._id).indexOf(itemId);
        console.log(this.stores[indexDelete])
        this.stores.splice(indexDelete, 1);
      }).catch(err => {
        console.log('error delete data')
      })
    },
    pricing: function (price) {
      return '$' + price
    },
    getName: function (name) {
      if(name.length > 33) return name.slice(0, 30) + '...';
      else {
        for(let i = name.length; i < 33; i++) {
          name += ' '
        }
        return name
      }
    },
    addToCart: function (item) {
      for(let i in this.stores) {
        if(this.stores[i]._id == item._id && this.stores[i].stock) {
          this.stores[i].stock--;
          for(let i in this.cart) {
            if(this.cart[i].productId == item._id) {
              this.cart[i].qty++;
              localStorage.setItem("cart", JSON.stringify(this.cart));
              localStorage.setItem("stores", JSON.stringify(this.stores));
              return;
            }
          }
          let newItem = {
            productId: item._id,
            name: item.name,
            price: item.price,
            qty: 1,
          };
          this.cart.push(newItem)
          localStorage.setItem("cart", JSON.stringify(this.cart));
          localStorage.setItem("stores", JSON.stringify(this.stores));
          return
        }
      }
    },
    getStock: function (_id) {
      for(let i in this.stores) {
        if(this.stores[i]._id == _id) {
          return this.stock
        }
      }
    },
    setstores: function (updatedstores) {
      this.stores = updatedstores;
      localStorage.setItem('stores', JSON.stringify(this.stores))
    },
    setCart: function (updatedCart) {
      this.cart = updatedCart;
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    fileDragHover: function () {
      event.stopPropagation();
      event.preventDefault();
      event.target.className = (event.type == "dragover" ? "hover" : "");
    },
  },

  created: function () {
    axios.get('http://35.198.216.59/items') //Local test
      // axios.get('http://35.198.215.76/items') //Online Db
      .then((response) => {

        if(localStorage.getItem('stores')) {
          this.stores = JSON.parse(localStorage.getItem('stores'));
        } else {
          console.log(response)
          this.stores = response.data.items;
          localStorage.setItem("stores", JSON.stringify(this.stores));
        }

        if(localStorage.getItem('cart')) {
          this.cart = JSON.parse(localStorage.getItem('cart'))
        } else {
          this.cart = [];
        }
      })
      .catch((err) => {
        console.log(err)
      });

    axios.get('http://35.198.216.59/verifyAdmin/', {
        headers: {
          apptoken: localStorage.getItem('apptoken')
        }
      })
      .then(({
        data
      }) => {
        this.role = data;
      })
  }
})

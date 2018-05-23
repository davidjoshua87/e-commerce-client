Vue.component('head-comp', {
  template: `
    <header>
        <nav class="navbar navbar-expand-sm fixed-top navbar-light navi">
        <img href="index.html" src="https://storage.googleapis.com/e-commerce.unguhiu.com/logo.png"/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Store</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="index.html">Action Figure</a>
                            <a class="dropdown-item" href="index.html">Movie</a>
                            <a class="dropdown-item" href="index.html">Games</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="admin.html" v-if="role == 'admin'">
                            Add Item
                        </a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item" v-if="role">
                        <a class="nav-link" @click='logout'>
                        <i class="fas fa-sign-out-alt"></i> Logout
                        </a>
                    </li>
                    <li class="nav-item" v-else>
                        <a class="nav-link" data-toggle="modal" data-target="#loginModal">
                            <i class="fas fa-user"></i> Login
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="modal" data-target="#myModal">
                            <i class="fas fa-shopping-cart"></i> Cart  <span class="badge badge-success">{{countCart}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    `,
  props: ['cart', 'role'],
  computed: {
    countCart: function () {
      let total = 0;
      for(let i in this.cart) {
        total += this.cart[i].qty
      }
      return total
    },
  },
  methods: {
    logout: function () {
      localStorage.removeItem('apptoken');
      window.location.href = 'index.html';
    }
  }
})

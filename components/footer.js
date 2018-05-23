Vue.component('foot-comp', {
    template: `
    <footer class="mt-4">
        <div class="greenline"></div>
        <div class="page-footer font-small stylish-color-dark pt-4" id="footData">
            <div class="container text-center text-md-left">
                <div class="row text-center text-md-left mt-3 pb-3">
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 footer-content">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Brand</h6>
                        <img src="https://storage.googleapis.com/e-commerce.unguhiu.com/logo1.png"/>
                        <img src="https://storage.googleapis.com/e-commerce.unguhiu.com/logo1.png"/>
                        <img src="https://storage.googleapis.com/e-commerce.unguhiu.com/logo1.png"/>
                        <img src="https://storage.googleapis.com/e-commerce.unguhiu.com/logo1.png"/>
                    </div>
                    <hr class="w-100 clearfix d-md-none">
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 footer-content">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p><i class="fa fa-home mr-3"></i> London, UK</p>
                        <p><i class="fa fa-envelope mr-3"></i> info@onecart.com</p>
                        <p><i class="fa fa-phone mr-3"></i> + 01 234 567 89</p>
                    </div>
                </div>
                <hr>
                <div class="row py-3 d-flex align-items-center">
                    <div class="col-md-8 col-lg-8 footer-content">
                        <p class="text-center text-md-left grey-text">© 2018 Copyright: <a href="index.html"><strong style="color: #f2d47a;"> OneCart.com</strong></a></p>
                    </div>
                    <div class="col-md-8 col-lg-4 ml-lg-0">
                        <div class="text-center text-md-right">
                            <ul class="list-unstyled list-inline">
                                <li class="list-inline-item"><a href="fb.com" class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook-square"></i></a></li>
                                <li class="list-inline-item"><a href="twitter.com" class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-twitter-square"></i></a></li>
                                <li class="list-inline-item"><a href="google.com" class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-google-plus"></i></a></li>
                                <li class="list-inline-item"><a href="linkedin.com" class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `
})

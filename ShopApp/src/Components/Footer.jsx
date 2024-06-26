import React from "react";

const Footer = () => {
  return (
    <div class="bg-info">
      <div class="d-flex flex-column h-100 ">
        <footer class="w-100 py-4 flex-shrink-0">
          <div class="container py-4">
            <div class="row gy-4 gx-5">
              <div class="col-lg-4 col-md-6">
                <h5 class="h1 text-white">FB.</h5>
                <p class="small text-muted">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor
                  incididunt.
                </p>
                <p class="small text-muted mb-0">
                  &copy; Copyrights. All rights reserved.{" "}
                  <a class="text-primary" href="#">
                    Bootstrapious.com
                  </a>
                </p>
              </div>
              <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Get started</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6">
                <h5 class="text-white mb-3">Quick links</h5>
                <ul class="list-unstyled text-muted">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Get started</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6">
                <h5 class="text-white mb-3">Newsletter</h5>
                <p class="small text-muted">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor
                  incididunt.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { useSelector } from "react-redux";
import cartReducer from "./reducers/cartReducer";

export default function Navbar() {
  const cartobj = useSelector((store) => store.cartReducer);

  return (
    <div style={{ fontSize : '25px' , backgroundColor : 'black' }} >
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                 <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/additem">
                Add Item
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/cart">
                Cart : {cartobj.cartItems.length}{" "}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

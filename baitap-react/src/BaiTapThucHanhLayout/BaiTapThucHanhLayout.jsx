import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Item from "../Item/Item";
import Footer from "../Footer/Footer";

export default function BaiTapThucHanhLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container-fluid flex-grow-1 my-4">
        <Banner />
        <div className="row">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <Footer />
    </div>
  );
}

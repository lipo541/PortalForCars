import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main/main";
import Contacts from "../pages/contacts/contacts";
import Login from "../pages/login/login";
import Prises from "../pages/prices/prises";
import Registration from "../pages/registration/registration";
import Rental from "../pages/rental/rental";
import Review from "../pages/reviews/review";
import Error from "../pages/error";
import Aboutus from "../pages/aboutus/aboutus";

const Remoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/prices" element={<Prises />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/rental" element={<Rental />} />
      <Route path="/review" element={<Review />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default Remoute;

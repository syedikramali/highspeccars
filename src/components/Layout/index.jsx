import { Paper } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Paper sx={{ borderRadius: 0 }} elevation={0}>
        {children}
      </Paper>
      <Footer />
    </div>
  );
}

export default Layout;

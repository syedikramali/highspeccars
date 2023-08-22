import { Paper } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";
import { includes } from "lodash";

function Layout({ children }) {
  const { pathname } = useRouter();
  return (
    <div>
      <Navbar />
      <Paper sx={{ borderRadius: 0 }} elevation={0}>
        {children}
      </Paper>
      {includes(pathname, "/app/admin") ? null : <Footer />}
    </div>
  );
}

export default Layout;

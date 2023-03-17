import "./App.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Routes, Route, Link } from "react-router-dom";
import ProductEdit from "./views/ProductEdit";
import ProductDetail from "./views/ProductDetail";
import Cart from "./views/Cart";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/"> Home{/* logga */}</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/ProductEdit">Skapa produkt{/* logga */}</Link>
            </Typography>
            <Typography variant="h6" component="div">
              Användare
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/Cart">Kundvagn</Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/ProductDetail"
            element={<ProductDetail></ProductDetail>}
          ></Route>
          <Route path="/Cart" element={<Cart></Cart>}></Route>
          <Route
            path="/ProductEdit"
            element={<ProductEdit></ProductEdit>}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

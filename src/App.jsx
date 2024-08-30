import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Products } from "./components/Products";
import { Orders } from "./components/Orders";
import { Customers } from "./components/Customers";
import { Transactions } from "./components/Transactions";
import { Messages } from "./components/Messages";
import { Login } from "./components/Login";
import { SidebarContext } from "./context/SidebarContext";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    <SidebarContext.Provider value={{ toggle, setToggle }}>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="messages" element={<Messages />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </SidebarContext.Provider>
  );
}

export default App;

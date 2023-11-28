import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Main from "./components/Main";
import Products from "./components/Products";
import RegistrationForm from "./components/RegistrationForm";
import RefInput from "./components/RefInput";
import { createContext, useState } from "react";
import { Routes, Route } from 'react-router';
import HomePage from "./components/HomePage";

export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount }}>
      <div className="App">
        <Header />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/products" element={<Products />} />
			<Route path="/registration" element={<RegistrationForm />} />
			<Route path="/refinput" element={<RefInput />} />
		</Routes>
        {/* <Main /> */}
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;

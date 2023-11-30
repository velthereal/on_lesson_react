import "./app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleUserPage from "./components/SingleUserPage";
// import Main from "./components/Main";
import Products from "./components/Products";
import RegistrationForm from "./components/RegistrationForm";
import RefInput from "./components/RefInput";
import { createContext, useState } from "react";
import { Routes, Route } from 'react-router';
import HomePage from "./components/HomePage";
import { HOME_PATH, PRODUCTS_PATH, REGISTRATION_PATH, REFINPUT_PATH, NOT_FOUND_PATH, SINGLE_USER_PATH  } from '../src/constants/routes-links';
import NotFoundPage from "./components/NotFoundPage";

export const UsersContext = createContext();

const App = () => {
  const [usersCount, setUsersCount] = useState(0);

  return (
    <UsersContext.Provider value={{ usersCount, setUsersCount }}>
      <div className="App">
        <Header />
		<Routes>
			<Route path={HOME_PATH} element={<HomePage />} />
			<Route path={PRODUCTS_PATH} element={<Products />} />
			<Route path={REGISTRATION_PATH} element={<RegistrationForm />} />
			<Route path={REFINPUT_PATH} element={<RefInput />} />
			<Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
			<Route path={SINGLE_USER_PATH} element={<SingleUserPage />} />
		</Routes>
        {/* <Main /> */}
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;

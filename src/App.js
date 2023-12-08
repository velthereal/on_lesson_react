import "./app.css";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import RegistrationForm from "./components/RegistrationForm";
import RefInput from "./components/RefInput";
import SingleUserPage from "./components/SingleUserPage";
import NotFoundPage from "./components/NotFoundPage";
import Person from "./components/Person";
import AboutUsPage from "./components/AboutUsPage";
import ContactsPage from "./components/ContactsPage";
import Location from "./components/Location";
import Footer from "./components/Footer";

import { createContext, useState } from "react";
import { Routes, Route } from 'react-router';

import { HOME_PATH, PRODUCTS_PATH, REGISTRATION_PATH, REFINPUT_PATH, NOT_FOUND_PATH, SINGLE_USER_PATH, PERSON_PATH, ABOUT_PATH, CONTACTS_PATH, LOCATION_PATH  } from './constants/routes-links';

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
			<Route path={PERSON_PATH} element={<Person />} />
			<Route path={ABOUT_PATH} element={<AboutUsPage />} />
			<Route path={CONTACTS_PATH} element={<ContactsPage />} />
			<Route path={LOCATION_PATH} element={<Location />} />
			<Route path={SINGLE_USER_PATH} element={<SingleUserPage />} />
			<Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
		</Routes>
        <Footer />
      </div>
    </UsersContext.Provider>
  );
};

export default App;

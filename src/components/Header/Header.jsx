import "./header.css";

import NavigationItem from "../NavigationItem";

import { UsersContext } from "../../App";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { HOME_PATH, PRODUCTS_PATH, REGISTRATION_PATH, REFINPUT_PATH, PERSON_PATH, ABOUT_PATH, CONTACTS_PATH, LOCATION_PATH, SINGLE_USER_PATH } from '../../constants/routes-links';

const Header = () => {
  const { usersCount } = useContext(UsersContext);

	const navElements = [
    	{
      		text: "First",
      		isUppercasetext: true,
      		description: "second description",
    	},
    	{
      		text: "Second",
      		isUppercasetext: true,
      		description: "second description",
    	},
    	{
      		text: "Third",
      		isUppercasetext: true,
      		description: "second description",
    	},
    	{
      		text: "samsung",
      		isUppercasetext: true,
    	},
  	];

	return (
    	<header>
			<Link to={HOME_PATH}>Home</Link>
			<Link to={PRODUCTS_PATH}>Products</Link>
			<Link to={REGISTRATION_PATH}>Registaration</Link>
			<Link to='/refinput/hello'>Ref Input</Link>
			<Link to={PERSON_PATH}>Person</Link>
			<Link to={ABOUT_PATH}>About Us</Link>
			<Link to={CONTACTS_PATH}>Contacts</Link>
			<Link to={LOCATION_PATH}>Location</Link>
			<Link to={SINGLE_USER_PATH}>Single User Page</Link>
      		{/* {navElements.map((element) => {
        		return (
          			<NavigationItem
            			key={element.text}
            			text={element.text}
            			isUppercasetext={element.isUppercasetext}
            			description={element.description}
          			/>
        		);
      		})} */}
      		<div>User Count: {usersCount}</div>
    	</header>
  	);
};

export default Header;
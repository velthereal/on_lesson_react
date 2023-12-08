import styles from "./registrationForm.module.css";

import { UsersContext } from "../../App";

import Input from "../Input";
import UserCard from "../UserCard/UserCard";

import { HOME_PATH, REFINPUT_PATH } from '../../constants/routes-links';

import classNames from "classnames";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { v4 as getUniqueId } from 'uuid';

const DEFAULT_USERS = [
	{
    	name: 'John',
    	surname: 'Nollan',
    	email: 'john@gmail.com',
    	id: getUniqueId()
  	},
  	{
    	name: 'Nick',
    	surname: 'Rozberg',
    	email: 'nick',
    	id: getUniqueId()
  	},
  	{
    	name: 'Anna',
    	surname: 'Lee',
    	email: 'anna@gmail.com',
    	id: getUniqueId()
  	},
  	{
    	name: 'Rafael',
    	surname: 'Rafff',
    	email: 'rafael@gmail.com',
    	id: getUniqueId()
  	},
];

const RegistrationForm = () => {
	const navigator = useNavigate();
 	const contextData = useContext(UsersContext);
	contextData.setUsersCount(users.length);

  	const [users, setUsers] = useState(DEFAULT_USERS);
  	const [isEditMode, setIsEditMode] = useState(true);

	const [name, setName] = useState();
  	const [surname, setSurname] = useState();
  	const [email, setEmail] = useState();
  	const [err, setErr] = useState(false);

  	const onAddUser = () => {
    	const user = {
      		name,
      		surname,
      		email,
      		id: getUniqueId()
    	};

    	setUsers([...users, user]);

    	if (isEmpty(name) || isEmpty(surname) || isEmpty(email)) {
      		setErr(true)
    	}
    
    	setName("");
    	setSurname("");
    	setEmail("");
  	};

	const leftSideClassName = classNames(
    	styles['left-side'],
    	{
      		[styles['border-red']]: err,
    	},
  	);

	const onGetName = (value) => {
    	setName(value);
  	};

  	const onGetSurname = (value) => {
    	setSurname(value);
  	};

  	const onGetEmail = (value) => {
    	setEmail(value);
  	};

  	const onDeleteUserHandler = (id) => {
    	const filteredUsers = users.filter((user) => user.id !== id);
      	setUsers(filteredUsers)  
  	};

  	const onUpdateUserHandler = (id) => {
    	const currentUser = users.filter((user) => user.id === id)[0];
  
    	setName(currentUser.name);
    	setSurname(currentUser.surname);
    	setEmail(currentUser.email);
  	};

	if(users.length >= 7) {
		navigator(REFINPUT_PATH)
	}


	return (
    	<div className={styles['common']}>
      		<div className={leftSideClassName}>
        		<Input
          			label="Name: "
          			placeholder="Enter Your Name"
          			onChangeFunction={onGetName}
          			value={name} />
        		<Input
          			label="Surname: "
          			placeholder="Enter Your Surname"
          			onChangeFunction={onGetSurname}
          			value={surname} />
        		<Input
          			label="Email: "
          			placeholder="Enter Your Email"
          			onChangeFunction={onGetEmail}
          			value={email} />
        		{
          			isEditMode ? (
            			<button type="button" onClick={onAddUser} className={styles['add-user-button']}>
              				Update User
            			</button>
          			) : (
            			<button type="button" onClick={onAddUser} className={styles['add-user-button']}>
               				Add User
            			</button>
          			)
        		}
				<button type="button" onClick={() => { navigator(HOME_PATH)}} className={styles['add-user-button']}>
               		Link to homepage
            	</button>
      		</div>
      		<div className={styles['right-side']}>
        		<div className={styles['users-list']}>
          			{users.map((user, index) => {
						const { name, surname, email, id } = user;
						return (
						<UserCard
							key={index}
							name={name}
							surname={surname}
							email={email}
							id={id}
							onClickDeleteBtn={onDeleteUserHandler}
							onClickUpdateBtn={onUpdateUserHandler} />
						);
          			})}
        		</div>
      		</div>
    	</div>
  	);
};

export default RegistrationForm;
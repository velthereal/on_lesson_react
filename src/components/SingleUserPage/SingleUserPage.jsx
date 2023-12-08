import styles from './singleuser.module.css';

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleUserPage = () => {
	const { id } = useParams();
	const [user, setUser] = useState({});
	const [fetching, setFetching] = useState(false);
	const [fetchError, setFetchError] = useState(null);
	
	useEffect(function() {
		setFetching(true);
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then(response => response.json())
		.then(resp => {
			setFetching(false);
			console.log(resp);
			setUser(resp);
		})
		.catch(err => {
			console.log('err => ', err);
			setFetching(false);
			setFetchError(err);
		});
	}, []);
	
	return (
		<div className={styles['common']}>
			<p><span>Single User with ID:</span> {id}</p>
			<p><span>Name:</span> {user.name}</p>
			<p><span>Username:</span> {user.username}</p>
			<p><span>Email:</span> {user.email}</p>
		</div>
	)
}

export default SingleUserPage;
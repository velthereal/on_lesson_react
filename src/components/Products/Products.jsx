import styles from './products.module.css';

import UserCard from "../UserCard";
import QueryLoader from "../QueryLoader";

import { useEffect, useState } from 'react';

const Products = () => {
	const [users, setUsers] = useState([]);
	const [fetching, setFetching] = useState(false);
	const [fetchError, setFetchError] = useState(null);

	useEffect(function() {
		setFetching(true);
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(resp => {
			setUsers(resp);
			setFetching(false);
		})
		.catch(err => {
			console.log('err => ', err);
			setFetching(false);
			setFetchError(err);
		});
	}, []);

	return (
		<div>
			<QueryLoader fetching={fetching} error={fetchError} >
				<div className={styles["common"]}>
					{ users.map((user, index) => {
						const { name, email, username, id } = user;
						return (
							<UserCard
								key={index}
								name={name}
								email={email}
								username={username}
								id={id} />
						)
					})}
				</div>
			</QueryLoader>
		</div>
	);
}

export default Products;
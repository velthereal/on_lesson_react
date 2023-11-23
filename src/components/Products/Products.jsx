// import BorderWrapper from '../BorderWrapper';
import UserCard from "../UserCard";
import QueryLoader from "../QueryLoader";
import styles from './products.module.css';
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
			// console.log(resp);
			setUsers(resp);
			setFetching(false);
		})
		.catch(err => {
			console.log('err => ', err);
			setFetching(false);
			setFetchError(err);
		});
		// console.log('useEffect');
	}, []);
	return (
		<>
			{/* <div className={styles['common']}>
				<div>{ fetching && 'Data is loading ...' }</div>
				<div>{ fetchError && `Opps, we have error: ${fetchError}` }</div>
			</div> */}
			<QueryLoader fetching={fetching} error={fetchError} >
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
			</QueryLoader>
			{/* { console.log('render') } */}
			{/* <BorderWrapper showDefaultText={false}>
				<div>Hello</div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eius quo fugiat cum? Voluptatem quo molestiae animi, saepe ipsam voluptate consequuntur nesciunt atque error sequi! Distinctio repellendus rem dolor quasi.</p>
			</BorderWrapper> */}

		</>
	);
}

export default Products;

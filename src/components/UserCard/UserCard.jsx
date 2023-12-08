import './userCard.css';

import { Link } from 'react-router-dom';

const UserCard = ({ name, username, email, id, onClickDeleteBtn, onClickUpdateBtn }) => {
	return (
		<Link to={`/user/${id}`}>
			<div className='common-user-card'>
				<div>{ `Name : ${name}` }</div>
				<div>{ `Username : ${username}` }</div>
				<div>{ `Email : ${email}` }</div>
				<button type='button' onClick={() => { onClickDeleteBtn(id) }}>Delete User</button>
				<button type='button' onClick={() => { onClickUpdateBtn(id) }}>Update User</button>
			</div>
		</Link>
	)
};

export default UserCard;
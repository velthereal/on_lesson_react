import './userCard.css'

const UserCard = ({ name, username, email, id, onClickDeleteBtn, onClickUpdateBtn }) => {

	return (
		<div className='common-user-card'>
			<div>{ `Name : ${name}` }</div>
			<div>{ `Username : ${username}` }</div>
			<div>{ `Email : ${email}` }</div>
			<button type='button' onClick={() => { onClickDeleteBtn(id) }}>Delete User</button>
			<button type='button' onClick={() => { onClickUpdateBtn(id) }}>Update User</button>
		</div>
	)
};

export default UserCard;

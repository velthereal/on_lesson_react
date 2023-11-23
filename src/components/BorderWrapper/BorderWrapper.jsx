import styles from './borderWrapper.module.css'

const BorderWrapper = (props) => {
	const { children, showDefaultText } = props;
	console.log(props);
	return (
		<div className={styles['common']}>
			{ showDefaultText ? 'Default text ...' : children }
		</div>
	);
}

export default BorderWrapper;

import { useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';

const RefInput = () => {
	const inputRef = useRef(null);
	const params = useParams();

	useEffect(() => {
		console.log(inputRef.current);
	}, []);
	
	return (
		<label>
			Ref Input
			<input ref={inputRef} id="inputRef" type="text" />
		</label>
	)
}

export default RefInput;
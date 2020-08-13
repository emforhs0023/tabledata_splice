import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_USER_REQUEST } from '../../store/reducers/user';

const PageData = () => {
    const dispatch = useDispatch();
    useEffect(() => {
		
        dispatch({
            type: LOAD_USER_REQUEST,
        });
		
	}, []);

    return(
        <>
            dsjfkljasdlf
        </>
    )
}

export default PageData
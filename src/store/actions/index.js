export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

const increment = () => {
  return {
      type: 'INCREMENT_COUNTER',
  }
}
const logInSuccess = (data) => {
  return {
      type: 'LOG_IN_SUCCESS',
      data
  }
};

export const incrementAsync = () => {
  return (dispatch) => {
    dispatch(increment());
    try {
      setTimeout(() => { // 비동기
        dispatch(logInSuccess({ 
            userId: 1,
            nickname: 'Jjin'
        }));
      }, 2000);
    } catch(e){
      console.log("틀렸어")
    }
    
  };
}


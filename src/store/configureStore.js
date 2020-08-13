import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
 
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers'
import rootSaga from './sagas'

// const thunkMiddleware = (store) => (next) => (action) => {
//   if (typeof action === 'function') { // 비동기
//     return action(store.dispatch, store.getState);
//   }
//   return next(action); // 동기
// };

// const ReduxThunk = window.ReduxThunk.default;
const sagaMiddleware = createSagaMiddleware()
const enhancer = compose( 
		applyMiddleware(
      		sagaMiddleware
		),
		applyMiddleware(
			ReduxThunk
	  	)
	)
const store = createStore(
	rootReducer,enhancer
)
sagaMiddleware.run(rootSaga)
 
export default store;

import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleWare from 'redux-saga';
import {errorsReducer} from '@store/reducers/errors';
import {loginReducer} from '@store/reducers/login';
import {rootSaga} from '@store/sagas/root';
import {userReducer} from '@store/reducers/user';

const sagaMiddleWare = createSagaMiddleWare();

const loginPersistConfig = {
  key: 'login',
  storage: AsyncStorage,
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  loginStore: persistReducer(loginPersistConfig, loginReducer),
  userStore: persistReducer(userPersistConfig, userReducer),
  errorsStore: errorsReducer,
});

export const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
export const persist = persistStore(store);

import {combineReducers, createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import loginReducer from './reducers/userReducer'
import infoReducer from './reducers/dashboardReducer'
import Routes from './routes' 

const customMiddleWare = store => next => action => {
  const prev = store.getState()

  next(action);

  const label = 'My own middleware';
  
console.group(label);
  console.info('%cprev state',"color:gray",prev,);
  console.info('%caction    ',"color:lightskyblue",action);
  console.info('%cnext state',"color:lightgreen",store.getState());
console.groupEnd(label);
  
}

const allReducers = combineReducers({login:loginReducer,info:infoReducer})

const middlewareEnhancer = applyMiddleware(customMiddleWare)

const store = createStore(allReducers,middlewareEnhancer)

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;

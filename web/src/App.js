import {combineReducers, createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import loginReducer from './reducers/userReducer'
import infoReducer from './reducers/dashboardReducer'
import Routes from './routes' 
import {delayedMessageMiddleware,logger} from './reduxMiddlewares/middlewares'
import ReduxThunk from 'redux-thunk'
import {offline} from 'redux-offline'
import defaultConfig from 'redux-offline/lib/defaults'
import Api from 'axios'



const customConfig = {
  ...defaultConfig,
  effect: (effect, _action) => Api(effect)
}

const allReducers = combineReducers({login:loginReducer,companies:infoReducer})

const middlewareEnhancer = applyMiddleware(delayedMessageMiddleware,logger,ReduxThunk)

const store = createStore(allReducers,compose( middlewareEnhancer,offline(customConfig) ) )

function App() {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;

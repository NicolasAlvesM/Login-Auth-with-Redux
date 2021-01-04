export const logger = store => next => action => {
    const prev = store.getState()
    next(action);
  
    const label = 'My own middleware';
    
  console.group(label);
    console.info('%cprev state',"color:gray",prev,);
    console.info('%caction    ',"color:lightskyblue",action);
    console.info('%cnext state',"color:lightgreen",store.getState());
  console.groupEnd(label);
    
  }

//  export const handleasyncFunctionMiddleware = store => next => action => {
//     typeof action === 'function' 
//      ? action(store.dispatch, store.getState)
//      : next(action)
//   }

 export const delayedMessageMiddleware = store => next => action => {
    if (action.type === 'GET_COMPANIES') {
      setTimeout(() => {
        console.log('COMPANIES: ', action.payload)
      }, 5000)
    } 
    return next(action)
  }
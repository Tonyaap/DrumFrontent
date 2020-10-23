import { createStore, applyMiddleware, compose } from "redux";

import ReduxThunk from "redux-thunk";
import reducer from "./rootReducer";

// const devTools =
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store=createStore(rootreducer,
    initialstate,
    compose(applyMiddleware(...middleware))
)

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

// const store = createStore(reducer, enhancer);

export default store;

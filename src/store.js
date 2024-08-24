import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Corrected import
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./components/redux/reducers/main"; // Assuming this is the correct path

const middleware = [thunk];

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

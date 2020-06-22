import {combineReducers} from 'redux';
import BlogReducer from './BlogReducer';
import LoadingReducer from './LoadingReducer';

const rootReducer = combineReducers({
    blogList: BlogReducer,
    loadingReducer: LoadingReducer
})

export default rootReducer;
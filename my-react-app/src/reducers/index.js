import redux, { combineReducers} from 'redux'
import { CounterReducer } from './CounterReducer'
import { PostReducer } from './PostReducer';

export const rootReducer = combineReducers({
  countInfo : CounterReducer,
  posts: PostReducer
});

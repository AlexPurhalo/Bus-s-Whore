import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  whores: (state = [
		'Marya Egorova', 'Anastasya Goryga', 'Elezaveta Muxailovska', 'Alla Zerebnuk', 'Anzela Zerebnuk', '...'
	]) => state
});

export default rootReducer;

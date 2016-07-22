import { SAVE_WHORE } from '../actions/types';

export default function (state = [], action) {
	switch(action.type) {
		case SAVE_WHORE:
			console.log(SAVE_WHORE);
			console.log(action);
			console.log(action.type);
			console.log(action.payload);
					return [ ...state, action.payload ];
	}

	return state;
}

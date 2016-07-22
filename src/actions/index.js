import { SAVE_WHORE } from './types';

export function saveWhore(whore) {
	return {
		type: SAVE_WHORE,
		payload: whore
	};
}

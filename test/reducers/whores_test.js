import { expect } from '../test_helper';
import whoresReducer from '../../src/reducers/whores';
import { SAVE_WHORE } from '../../src/actions/types';

describe('Whores Reducer', () => {
	it('handles action with unknown type', () => {
		expect(whoresReducer(undefined, {})).to.eql([]);
	});

	it('handles action of type SAVE_COMMENTS', () => {
		const action = { type: SAVE_WHORE, payload: 'save_whore' };
		expect(whoresReducer([], action)).to.eql(['save_whore']);
	});
});

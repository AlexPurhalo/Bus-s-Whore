import { expect } from '../test_helper';
import { SAVE_WHORE } from '../../src/actions/types';
import { saveWhore } from '../../src/actions';

describe('actions', () => {
	describe('saveComment', () => {
		it('has the correct type', () => {
			const action = saveWhore();

			expect(action.type).to.equal(SAVE_WHORE);
		});

		it('has the correct payload', () => {
			const action = saveWhore('Alla Zerebnuk');

			expect(action.payload).to.equal('Alla Zerebnuk');
		});
	});
});

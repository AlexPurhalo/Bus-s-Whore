import { renderComponent, expect } from '../test_helper';
import BusList from '../../src/components/bus_list';

describe('BusList', () => {
	// Definitions
	let component;

	beforeEach(() => {
		// here is the top 3 whores of my school class, love my classmates :3
		const props = { whores: ['Marya Egorova', 'Anastasya Goryga', 'Elezaveta Muxailovska'] };
		component = renderComponent(BusList, null, props);

	});
	// Specs
	it('converts each whore to LI tag', () => {
		expect(component.find('li').length).to.equal(3)
	});

	it('shows every added whore to list', () => {
		expect(component).to.contain('Marya Egorova');
		expect(component).to.contain('Elezaveta Muxailovska');
	});
});


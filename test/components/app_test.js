import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
	// Definitions
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});


	// Specs
	it('has a BusManager component', () => {
		expect(component.find('#bus-manager')).to.exist;
	});

	it('has a BusList component', () => {
		expect(component.find('#bus-list')).to.exist
	})
});

import { renderComponent, expect } from '../test_helper';
import BusManager from '../../src/components/bus_manager';

describe('BusManager', () => {
	// Definitions
	let component;

	beforeEach(() => {
		component = renderComponent(BusManager)
	});

	// Specs
	it('has the correct class', () => {
		expect(component).to.have.id('bus-manager');
	});

	it('has a form', () => {
		expect(component.find('form')).to.exist
	});
	it('has a input field', () => {
		expect(component.find('input')).to.exist
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist
	})
});


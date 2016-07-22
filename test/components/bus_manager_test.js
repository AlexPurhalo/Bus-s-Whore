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

	it('has a input field', () => {
		expect(component.find('input')).to.exist
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist
	});

	describe('entering some text', () => {
		beforeEach(() => {
			component.find('input').simulate('change', 'I am writing here')
		});
		it('shows that text in input', () => {
			expect(component.find('input')).to.have.value('I am writing here')
		});

		it('after submitting input cleans up', () => {
			component.simulate('submit');
			expect(component.find('input')).to.have.value('');
		});
	})
});


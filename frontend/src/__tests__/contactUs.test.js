import ContactUs from '../components/contactUs';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
	const component = renderer.create(
		<BrowserRouter>
			<ContactUs />
		</BrowserRouter>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

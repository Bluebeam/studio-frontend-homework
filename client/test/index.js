import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const tests = require.context('./src/', true, /test\.js$/);
tests.keys().forEach(tests);

const components = require.context('../src/components/', true, /\.js$/);
components.keys().forEach(components);

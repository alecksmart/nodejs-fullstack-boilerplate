import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

export const mockStore = configureStore();

export const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

export const mountWithStore = (component, store) => {
  const context = {
    store,
  };
  return mount(component, { context });
};

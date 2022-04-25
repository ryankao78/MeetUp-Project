import React from 'react'; // this needs to be imported
import App from './App'; // we should put __test__ under src folder?
import { render, screen, cleanup } from '@testing-library/react';
// import { store } from './redux/store';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'C:/Users/stanl/VS Code - React Projects/MeetUp_Project/client/src/reducers/index.js';

function renderWithRedux(renderComponent) {
    const store = createStore(reducers, compose(applyMiddleware(thunk)));

    return render(<Provider store={ store }>{renderComponent}</Provider>);
}

test('should render App component', () => {
    renderWithRedux(<App />);
    
    expect(screen.getByText("Let's MeetUp!"));

});

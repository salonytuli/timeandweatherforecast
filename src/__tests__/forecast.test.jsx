import React from 'react';
import {render} from '@testing-library/react';
import Forecast from '../components/forecast';
import {Provider} from 'react-redux';
import {store} from "../stores";

describe("forecast screen", () => {
    it("should match snapshot", () => {
        const component = render(<Provider store={store}><Forecast/></Provider>);
        expect(component.toJSON).toMatchSnapshot();
    })
});
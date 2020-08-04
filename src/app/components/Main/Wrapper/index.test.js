import axiosMock from "axios";
import {Main} from './index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import {act} from '@testing-library/react';


test("sfasfas", () => {
    let main = "";

    act(() => {
        main = mount(
            <BrowserRouter>
                <Provider store={store}>
                    <Main />
                </Provider>
            </BrowserRouter>
            
        );
    })
    
    const text = main.find("ViewerWithDatePicker").text();

    console.log(text);
})


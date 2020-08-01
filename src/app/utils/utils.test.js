import { getAPIURL } from './getAPIURL';
import { createDatesList } from './createDatesList';


// test('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

it("The result of running the 'getAPIURL()' should be a string", () => {
    const dateString = "2020-08-08";
    const result = getAPIURL(dateString);
    expect(typeof result).toBe("string");
});

it("The result of running the 'getAPIURL()' should return an URL", () => {
    const dateString = "2020-08-08";
    const result = getAPIURL(dateString);
    expect(result).toBe(`https://api.nasa.gov/planetary/apod?api_key=TdCcOumK7lyile0FzWeLOAa7YKBRZJL4zvnCVrUE&date=${dateString}`)
});

it("The createDatesList() should return an array", () => {
    expect(typeof createDatesList()).toBe("object");
    expect(typeof createDatesList().length).toBe("number");
});
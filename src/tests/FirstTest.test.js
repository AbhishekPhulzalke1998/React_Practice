import {render,screen} from '@testing-library/react'
import FirstTest from '../components/FirstTest/FirstTest'

test("We are testing the firstExample", () => {
    render(<FirstTest />)
    const element = screen.getByText(/first test/i);
    expect(element).toBeInTheDocument();

})
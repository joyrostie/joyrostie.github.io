import ReactDOM from 'react-dom'
import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TodoHeader from './TodoHeader'

configure({ adapter: new Adapter() });

describe('TodoHeader component test', () => {
    let todoHeader
    beforeEach(() => {
        let currentItemMock = { text: '' };
        let handleInputMock = () => { alert('s') }
        todoHeader = shallow(<TodoHeader currentItem={currentItemMock} onChange={handleInputMock} />)
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(todoHeader, div);
    });

    it('handles input', () => {
        let mockObj = { taget: { value: 'Mock' } }
        todoHeader.find('input').simulate('change', mockObj)
    });

});
import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Nav from '../client/components/Nav'

describe('<Nav /> component test', () => {
  it('renders nav bar', () => {
    // Arrange
    const expected = 'Jill Glass'

    // Act
    const wrapper = mount(<Nav />)
    const actual = wrapper.text()
    // Assert
    expect(actual).toContain(expected)
  })
  it('render unchanged from previous snapshot', () => {
    const wrapper = mount(<Nav/>)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
 
})
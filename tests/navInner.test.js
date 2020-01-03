import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import NavInner from '../client/components/NavInner'

describe('<NavInner /> component test', () => {
  it('renders nav bar', () => {
    // Arrange
    const expected = 'HomeAboutWork'

    // Act
    const wrapper = mount(<NavInner />)
    const actual = wrapper.text()
    // Assert
    expect(actual).toContain(expected)
  })
  it('render unchanged from previous snapshot', () => {
    const wrapper = mount(<NavInner/>)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
 
})
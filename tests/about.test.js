import React from 'react'
import { mount } from 'enzyme'
import About from '../client/components/About'

describe('<About /> component test', () => {
  it('renders title', () => {
    // Arrange
    const expected = 'Jill Glass - Frontend Web Developer'

    // Act
    const wrapper = mount(<About />)
    const actual = wrapper.text()
    // Assert
    expect(actual).toContain(expected)
  })

  it('renders link titles', () => {
    // Arrange
    const expected = 'Github'

    // Act
    const wrapper = mount(<About />)
    const actual = wrapper.text()
    // Assert
    expect(actual).toContain(expected)
  })
 
})
import React from 'react'
import { mount } from 'enzyme'
import Main from '../client/components/Main'

describe('<Main /> component test', () => {
  it('renders work title', () => {
    // Arrange
    const expected = 'Work'

    // Act
    const wrapper = mount(<Main />)
    const actual = wrapper.text()
    // Assert
    expect(actual).toContain(expected)
  })

  it('renders About title', () => {
    // Arrange
    const expected = 'About'

    // Act
    const wrapper = mount(<Main />)
    const actual = wrapper.text()
    // Assert
    expect(actual).toContain(expected)
  })
 
})
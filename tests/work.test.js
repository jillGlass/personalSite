import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Work from '../client/components/Work'

describe('<Work /> component test', () => {
  it('renders header', () => {
    // Arrange
    const expected = 'Work Examples and Links'

    // Act
    const wrapper = mount(<Work />)
    const actual = wrapper.text()
    // Assert
    expect(actual).toContain(expected)
  })

  it('renders link titles', () => {
    // Arrange
    const expected = 'He Pokai Manu'

    // Act
    const wrapper = mount(<Work />)
    const actual = wrapper.text()
    // Assert
    expect(actual).toContain(expected)
  })
  it('render unchanged from previous snapshot', () => {
    const wrapper = mount(<Work/>)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
 
})
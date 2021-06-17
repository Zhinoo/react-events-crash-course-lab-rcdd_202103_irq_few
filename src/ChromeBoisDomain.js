<<<<<<< HEAD
import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'
export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */
  toggleCycle = (event)=> {
    toggleCycling()
  }

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
  runResize = (event)=> {
    if (event.key === 'a') {
      resize("+")
    } else if (event.key === 's') {
      resize("-")
    }
  }

  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={this.toggleCycle}
        onKeyPress={this.runResize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import * as canvasHelpers from '../src/canvasHelpers.js'
import ChromeBoisDomain from '../src/ChromeBoisDomain'
describe('<ChromeBoisDomain />', () => {
  const drawChromeBoiAtCoords = sinon.stub(canvasHelpers, "drawChromeBoiAtCoords")
  const toggleCycling = sinon.stub(canvasHelpers, "toggleCycling")
  const resize = sinon.stub(canvasHelpers, "resize")
  let comp, instance;
  beforeEach(() => {
    comp = shallow(<ChromeBoisDomain />)
    instance = comp.instance()
  })
  it('invokes the `drawChromeBoiAtCoords` method within `handleMouseMove`, passing the captured x and y values of the mouse from the event', () => {
    const event = {
      clientX: 33,
      clientY: 44
    }
    instance.handleMouseMove(event)
    const [x, y] = drawChromeBoiAtCoords.getCall(0).args
    expect(x).to.equal(33)
    expect(y).to.equal(44)
  })
  it('has an event listener for clicks on the <canvas> element that triggers `toggleCycling`', () => {
    comp.find('canvas').simulate('click')
    expect(toggleCycling.called).to.equal(true)
  })
  it('has an event listener for key presses on the <canvas> element that triggers `resize`', () => {
    const event = {
      key: 'a',
      which: 65,
    }
    // testing for all in case students pick different ones. Any should work just fine
    comp.find('canvas').simulate('keyDown', event)
    comp.find('canvas').simulate('keyPress', event)
    comp.find('canvas').simulate('keyUp', event)
    expect(resize.called).to.equal(true)
  })
  it("when the 'a' key is pressed, `resize` is invoked with the argument of '+'", () => {
    const event = {
      key: 'a',
      which: 65,
    }
    // testing for all in case students pick different ones. Any should work just fine
    comp.find('canvas').simulate('keyDown', event)
    comp.find('canvas').simulate('keyPress', event)
    comp.find('canvas').simulate('keyUp', event)
    expect(resize.getCall(0).args[0]).to.equal('+')
  })
  it("when the 's' key is pressed, `resize` is invoked with the argument of '-'", () => {
    const event = {
      key: 's',
      which: 83,
    }
    resize.reset()
    // testing for all in case students pick different ones. Any should work just fine
    comp.find('canvas').simulate('keyDown', event)
    comp.find('canvas').simulate('keyPress', event)
    comp.find('canvas').simulate('keyUp', event)
    expect(resize.getCall(0).args[0]).to.equal('-')
  })
})
>>>>>>> 92d09105370e3dfd1637c5b7968262ba44f3c0dd

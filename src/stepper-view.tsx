import {Requireable} from 'prop-types'
import React, {Component} from 'react'
import {Context, stepperContext} from './entities'

export {Requireable}

/**
 * Renders the active page in the stepper
 */
export class StepperView extends Component<{}, {}> {
  static contextTypes = stepperContext

  render() {
    const {pages, currentPage} = this.context as Context
    const page = pages[currentPage]

    if (page.render) {
      return page.render()
    } else {
      return <page.component />
    }
  }
}

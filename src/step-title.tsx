import React, {CSSProperties, StatelessComponent} from 'react'
import {compose, setDisplayName} from 'recompose'
import {withStepper} from './with-stepper'

/**
 * A component that display the title of the active page.
 *
 * ### Usage
 * ```
 * <StepTitle />
 * ```
 */
export const StepTitle: StatelessComponent<{style?: CSSProperties}> = compose(
  withStepper,
  setDisplayName('StepTitle'),
)(({pages, currentPage, style}) => (
  <span style={style}>{pages[currentPage].title}</span>
))

import {compose, getContext, setDisplayName, wrapDisplayName} from 'recompose'
import {stepperContext} from './entities'

/**
 * A HOC to inject the stepperContext as properties
 */
export const withStepper = WrappedComponent =>
  compose(
    setDisplayName(wrapDisplayName(WrappedComponent, 'withStepper')),
    getContext(stepperContext),
  )(WrappedComponent)

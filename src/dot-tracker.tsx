import React, {CSSProperties, StatelessComponent} from 'react'
import {compose, setDisplayName} from 'recompose'
import {Circle, defaultActiveColor, defaultInactiveColor} from './utils'
import {withStepper} from './with-stepper'

const row = {
  display: 'flex',
  alignItems: 'center' as 'center',
  justifyContent: 'center' as 'center',
}

/**
 * A component for tracking the current and total pages
 * using dots.
 *
 * ### Usage
 * ```
 * <DotTracker />
 * ```
 */
export const DotTracker: StatelessComponent<{
  activeColor?: string
  inactiveColor?: string
  style?: CSSProperties
}> = compose(
  withStepper,
  setDisplayName('DotTracker'),
)(
  ({
    pages,
    currentPage,
    style,
    activeColor = defaultActiveColor,
    inactiveColor = defaultInactiveColor,
  }) => (
    <div style={style ? Object.assign({}, row, style) : row}>
      {Array.from(Array(pages.length)).map((_, i) => (
        <Circle
          key={i}
          color={i === currentPage ? activeColor : inactiveColor}
          size={8}
          margin={4}
        />
      ))}
    </div>
  ),
)

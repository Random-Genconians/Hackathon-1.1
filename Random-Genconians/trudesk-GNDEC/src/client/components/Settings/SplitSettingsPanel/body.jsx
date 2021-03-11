/*
 *       .                             .o8                     oooo
 *    .o8                             "888                     `888
 *  .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
 *    888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
 *    888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
 *    888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
 *    "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 *  ========================================================================
 *  Author:     Chris Brame
 *  Updated:    2/2/19 9:40 PM
 *  Copyright (c) 2014-2019. All rights reserved.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { VelocityComponent } from 'velocity-react'

class SplitSettingsPanelBody extends React.Component {
  render () {
    const { active } = this.props
    return (
      <VelocityComponent animation={{ opacity: active ? 1 : 0 }} duration={750}>
        <div className={active ? '' : 'hide'}>{this.props.component}</div>
      </VelocityComponent>
    )
  }
}

SplitSettingsPanelBody.propTypes = {
  active: PropTypes.bool.isRequired,
  component: PropTypes.node.isRequired
}

export default SplitSettingsPanelBody

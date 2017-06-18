import React from 'react'
import ReactGA from 'react-ga'

const UNSET = 'UNSET_PAGENAME_ANALITCS'

export default class Analytics extends React.PureComponent {
  componentDidMount() {
    if (!this.props.track) {
      return
    }
    ReactGA.initialize(__GA_ID__, {
      debug: __DEV__,
    })

    const page = this.props.pageName === UNSET
      ? window.location.pathname + window.location.search
      : this.props.pageName

    ReactGA.set({page})
    ReactGA.pageview(page)
  }

  render() {
    return null
  }
}

Analytics.defaultProps = {
  track: true,
  pageName: UNSET,
}

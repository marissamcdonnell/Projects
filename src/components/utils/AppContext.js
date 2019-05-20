/* eslint react/no-multi-comp: 0 */
import React from "react"
import PropTypes from "prop-types"

const AppContext = React.createContext();

export class AppContextProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      click: 0,
      fruits: [],
    }
    this.getContext = this.getContext.bind(this)
  }

  getContext() {
    return {
    ...this.state,
  }
}

  render() {
    const { render } = this.props
    const context = this.getContext()
    return (
      <AppContext.Provider value={context}>
        {render(context)}
      </AppContext.Provider>
    )
  }
}

AppContextProvider.propTypes = {
  render: PropTypes.func.isRequired
}

export const withAppContext = Component => props => (
  <AppContext.Consumer>
    {appContext => <Component {...props} appContext={appContext} />}
  </AppContext.Consumer>
)

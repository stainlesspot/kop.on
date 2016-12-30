import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import '../styles/app.scss';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="logo"><IndexLink to="/">kop.on</IndexLink></h1>
        <nav className="menu">
          <IndexLink to="/" activeClassName="current">request</IndexLink>
          <Link to="/playing" activeClassName="current">now playing</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import {Switch} from 'pretty-checkbox-react';

import '@djthoms/pretty-checkbox';

class Toggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <Switch
              onClick={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default Toggler
/*
   Name: React Custom Select
   Description: Boiler plate for lightweight, fully customizable select/option groups within a React Component
   Author: Rory Kermack (@rorykermack)
   License: WTFPL (100% Open Source)
   Version: 1.0
*/

import React, { PropTypes } from 'react';
import Component from 'react-pure-render/component';

export default class CustomSelect extends Component {

  static propTypes = {
    options: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      selectorShown: false
    };
  }

  toggleSelectorShown() {
    const {selectorShown} = this.state;
    this.setState({
      selectorShown: !selectorShown
    });
  }

  updateSelection(selection) {
    this.toggleSelectorShown();
    const {onSelect, options} = this.props;
    this.setState({
      activeItem: selection
    });
    if (typeof onSelect !== 'undefined') onSelect(options[selection].value);
  }


  render() {
    const {options} = this.props;
    const {selectorShown, activeItem} = this.state;
    return(
      <div className="react-custom-select">
        <div className="selection" onClick={() => this.toggleSelectorShown()}>{options[activeItem].text}</div>
        {selectorShown &&
          <ul>
            {options.map((option, key) => {
              return (
                <li key={`react-custom-select-${key}`} onClick={() => this.updateSelection(key)}>{option.text}</li>
              )
            })}
          </ul>
        }
      </div>
    );
  }
}

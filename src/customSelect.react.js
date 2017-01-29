/*
   Name: React Custom Select
   Description: Boiler plate for lightweight, fully customizable select/option groups within a React Component
   Author: Rory Kermack (@rorykermack)
   License: WTFPL (100% Open Source)
   Version: 1.0
*/

import React, { PropTypes } from 'react';
import * as DefaultSelectStyles from './defaultStyles';

export default class CustomSelect extends React.Component {

  static propTypes = {
    options: PropTypes.array,
    onSelect: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      selectorShown: false
    };
  }

  componentWillMount() {
    const { options } = this.props;
    options.map((option, i) => {
      if (option.default) {
        this.setState({
          activeItem: i
        });
      }
      return true;
    });
  }

  toggleSelectorShown() {
    const { selectorShown } = this.state;
    this.setState({
      selectorShown: !selectorShown
    });
  }

  updateSelection(selection) {
    this.toggleSelectorShown();
    const { onSelect, options } = this.props;
    this.setState({
      activeItem: selection,
    }, () => {
      if (typeof onSelect !== 'undefined') onSelect(options[selection].value);
    });
  }


  render() {
    const { options } = this.props;
    const { selectorShown, activeItem } = this.state;
    return (
      <div className="react-custom-select" style={DefaultSelectStyles.ContainerStyles}>
        <div
          style={DefaultSelectStyles.SelectionStyles}
          className="selection"
          onClick={() => this.toggleSelectorShown()}
        >
          {options[activeItem].text}
        </div>
        {selectorShown &&
          <ul style={DefaultSelectStyles.UlStyles}>
            {options.map((option, key) => {
              return (
                <li
                  style={DefaultSelectStyles.OptionStyles}
                  key={`react-custom-select-${key}`}
                  onClick={() => this.updateSelection(key)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        }
      </div>
    );
  }
}

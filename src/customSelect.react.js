/*
   Name: React Custom Select
   Description: Boiler plate for lightweight, fully customizable select/option groups within a React Component
   Author: Rory Kermack (@rorykermack)
   License: WTFPL (100% Open Source)
   Version: 1.0
*/

import React, { PropTypes } from 'react';

export default class CustomSelect extends React.Component {

  static propTypes = {
    options: PropTypes.array
  };

  constructor(props) {
    super(props);
    const defaultStylesOn = (typeof props.defaultStyles !== 'undefined') ? props.defaultStyles : false;
    this.state = {
      activeItem: 0,
      selectorShown: false,
      defaultStyles: defaultStylesOn
    };
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
      activeItem: selection
    });
    if (typeof onSelect !== 'undefined') onSelect(options[selection].value);
  }


  render() {
    const { options } = this.props;
    const { selectorShown, activeItem } = this.state;

    const defultContainerStyles = {
      position: 'relative',
      color: '#2d2d2d',
      minWidth: '250px',
      display: 'inline-block'
    };

    const defaultSelectionStyles = {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      cursor: 'pointer',
      background: '#f0f0f0',
      display: 'inline-block',
      padding: '10px 15px',
      width: '100%',
      boxSizing: 'border-box',
      userSelect: 'none'
    };

    const defaultOptionStyles = {
      fontFamily: 'sans-serif',
      listStyle: 'none',
      minWidth: '250px',
      padding: '10px 15px',
      cursor: 'pointer',
      width: '100%',
      userSelect: 'none',
      boxSizing: 'border-box',
      borderBottom: '2px solid #c8c8c8'
    }

    const defaultUlStyles = {
      position: 'absolute',
      left: 0,
      top: 0,
      background: '#e7e7e7',
      margin: 0,
      padding: 0,
      width: '100%',
      boxSizing: 'border-box'
    }



    return(
      <div className="react-custom-select" style={defultContainerStyles}>
        <div style={defaultSelectionStyles} className="selection" onClick={() => this.toggleSelectorShown()}>{options[activeItem].text}</div>
        {selectorShown &&
          <ul style={defaultUlStyles}>
            {options.map((option, key) => {
              return (
                <li style={defaultOptionStyles} key={`react-custom-select-${key}`} onClick={() => this.updateSelection(key)}>{option.text}</li>
              )
            })}
          </ul>
        }
      </div>
    );
  }
}

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Name: React Custom Select
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Description: Boiler plate for lightweight, fully customizable select/option groups within a React Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Author: Rory Kermack (@rorykermack)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  License: WTFPL (100% Open Source)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Version: 1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

// import Component from 'react-pure-render/component';

var CustomSelect = function (_React$Component) {
  _inherits(CustomSelect, _React$Component);

  function CustomSelect(props) {
    _classCallCheck(this, CustomSelect);

    var _this = _possibleConstructorReturn(this, (CustomSelect.__proto__ || Object.getPrototypeOf(CustomSelect)).call(this, props));

    var defaultStylesOn = typeof props.defaultStyles !== 'undefined' ? props.defaultStyles : false;
    _this.state = {
      activeItem: 0,
      selectorShown: false,
      defaultStyles: defaultStylesOn
    };
    return _this;
  }

  _createClass(CustomSelect, [{
    key: 'toggleSelectorShown',
    value: function toggleSelectorShown() {
      var selectorShown = this.state.selectorShown;

      this.setState({
        selectorShown: !selectorShown
      });
    }
  }, {
    key: 'updateSelection',
    value: function updateSelection(selection) {
      this.toggleSelectorShown();
      var _props = this.props;
      var onSelect = _props.onSelect;
      var options = _props.options;

      this.setState({
        activeItem: selection
      });
      if (typeof onSelect !== 'undefined') onSelect(options[selection].value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = this.props.options;
      var _state = this.state;
      var selectorShown = _state.selectorShown;
      var activeItem = _state.activeItem;


      var defultContainerStyles = {
        position: 'relative',
        color: '#2d2d2d',
        minWidth: '250px',
        display: 'inline-block'
      };

      var defaultSelectionStyles = {
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

      var defaultOptionStyles = {
        fontFamily: 'sans-serif',
        listStyle: 'none',
        minWidth: '250px',
        padding: '10px 15px',
        cursor: 'pointer',
        width: '100%',
        userSelect: 'none',
        boxSizing: 'border-box',
        borderBottom: '2px solid #c8c8c8'
      };

      var defaultUlStyles = {
        position: 'absolute',
        left: 0,
        top: 0,
        background: '#e7e7e7',
        margin: 0,
        padding: 0,
        width: '100%',
        boxSizing: 'border-box'
      };

      return _react2.default.createElement(
        'div',
        { className: 'react-custom-select', style: defultContainerStyles },
        _react2.default.createElement(
          'div',
          { style: defaultSelectionStyles, className: 'selection', onClick: function onClick() {
              return _this2.toggleSelectorShown();
            } },
          options[activeItem].text
        ),
        selectorShown && _react2.default.createElement(
          'ul',
          { style: defaultUlStyles },
          options.map(function (option, key) {
            return _react2.default.createElement(
              'li',
              { style: defaultOptionStyles, key: 'react-custom-select-' + key, onClick: function onClick() {
                  return _this2.updateSelection(key);
                } },
              option.text
            );
          })
        )
      );
    }
  }]);

  return CustomSelect;
}(_react2.default.Component);

CustomSelect.propTypes = {
  options: _react.PropTypes.array
};
exports.default = CustomSelect;
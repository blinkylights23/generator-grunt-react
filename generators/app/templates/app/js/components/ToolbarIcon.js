'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var label = _ref.label;
  var icon = _ref.icon;
  var active = _ref.active;
  var onToggle = _ref.onToggle;
  var style = _ref.style;
  return _react2.default.createElement(
    'li',
    {
      className: "toolbar-icon " + (0, _classnames2.default)({ active: active }),
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        onToggle(style);
      }
    },
    label ? label : _react2.default.createElement('i', { className: icon })
  );
};
//# sourceMappingURL=ToolbarIcon.js.map

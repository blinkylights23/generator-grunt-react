'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToolbarIcon = require('../components/ToolbarIcon');

var _ToolbarIcon2 = _interopRequireDefault(_ToolbarIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var editorState = _ref.editorState;
  var onToggle = _ref.onToggle;
  var position = _ref.position;

  var currentStyle = editorState.getCurrentInlineStyle();
  return _react2.default.createElement('div', { className: 'toolbar linkToolbar', style: position });
};
//# sourceMappingURL=LinkToolbar.js.map

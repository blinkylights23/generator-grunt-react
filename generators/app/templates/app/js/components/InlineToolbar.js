'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToolbarIcon = require('../components/ToolbarIcon');

var _ToolbarIcon2 = _interopRequireDefault(_ToolbarIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INLINE_STYLES = [{ icon: 'a-bold', style: 'BOLD' }, { icon: 'a-italic', style: 'ITALIC' }, { icon: 'a-underline', style: 'UNDERLINE' }, { icon: 'a-code', style: 'CODE' }];

exports.default = function (_ref) {
  var editorState = _ref.editorState;
  var onToggle = _ref.onToggle;
  var position = _ref.position;
  var linkEditorToggle = _ref.linkEditorToggle;

  var currentStyle = editorState.getCurrentInlineStyle();
  return _react2.default.createElement(
    'div',
    {
      className: 'toolbar',
      id: 'inlineToolbar',
      style: position
    },
    _react2.default.createElement(
      'ul',
      { className: 'toolbar-icons' },
      INLINE_STYLES.map(function (type) {
        return _react2.default.createElement(_ToolbarIcon2.default, {
          key: type.label || type.icon,
          active: currentStyle.has(type.style),
          label: type.label,
          icon: type.icon,
          onToggle: onToggle,
          style: type.style
        });
      }),
      _react2.default.createElement(_ToolbarIcon2.default, {
        key: 'a-link',
        active: false,
        icon: 'a-link',
        onToggle: linkEditorToggle,
        style: editorState
      })
    )
  );
};
//# sourceMappingURL=InlineToolbar.js.map

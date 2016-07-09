'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ToolbarIcon = require('../components/ToolbarIcon');

var _ToolbarIcon2 = _interopRequireDefault(_ToolbarIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BLOCK_TYPES = [{ label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { icon: 'a-unordered-list', style: 'unordered-list-item' }, { icon: 'a-ordered-list', style: 'ordered-list-item' }, { icon: 'a-quote', style: 'blockquote' }];

var SideToolbarExtras = function SideToolbarExtras(_ref) {
  var editorState = _ref.editorState;
  var onToggle = _ref.onToggle;

  var selection = editorState.getSelection();
  var blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  return _react2.default.createElement(
    'div',
    { className: 'toolbar side' },
    _react2.default.createElement(
      'ul',
      { className: 'toolbar-icons' },
      BLOCK_TYPES.map(function (type) {
        return _react2.default.createElement(_ToolbarIcon2.default, {
          key: type.label || type.icon,
          active: type.style === blockType,
          label: type.label,
          icon: type.icon,
          onToggle: onToggle,
          style: type.style
        });
      })
    )
  );
};

var SideToolbar = function (_Component) {
  _inherits(SideToolbar, _Component);

  function SideToolbar(props) {
    _classCallCheck(this, SideToolbar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SideToolbar).call(this, props));

    _this.state = {
      isExpanded: false
    };
    return _this;
  }

  _createClass(SideToolbar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isExpanded = this.state.isExpanded;
      var _props = this.props;
      var editorState = _props.editorState;
      var onUploadImage = _props.onUploadImage;
      var onToggle = _props.onToggle;

      return _react2.default.createElement(
        'div',
        { style: this.props.style, className: 'side-toolbar' },
        _react2.default.createElement('i', { className: 'a-photo',
          onMouseDown: function onMouseDown(e) {
            return e.preventDefault();
          },
          onClick: onUploadImage
        }),
        _react2.default.createElement(
          'i',
          { className: 'a-menu',
            onMouseEnter: function onMouseEnter() {
              return _this2.setState({ isExpanded: true });
            },
            onMouseDown: function onMouseDown(e) {
              return e.preventDefault();
            },
            onMouseLeave: function onMouseLeave() {
              return _this2.setState({ isExpanded: false });
            }
          },
          isExpanded ? _react2.default.createElement(SideToolbarExtras, { editorState: editorState, onToggle: onToggle }) : null
        )
      );
    }
  }]);

  return SideToolbar;
}(_react.Component);

exports.default = SideToolbar;
//# sourceMappingURL=SideToolbar.js.map

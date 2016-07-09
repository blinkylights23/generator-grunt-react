'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlateEditor = function (_React$Component) {
  _inherits(SlateEditor, _React$Component);

  function SlateEditor(props) {
    _classCallCheck(this, SlateEditor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SlateEditor).call(this, props));

    _this.state = { editorState: _draftJs.EditorState.createEmpty() };
    _this.onChange = function (editorState) {
      return _this.setState({ editorState: editorState });
    };
    _this.handleKeyCommand = _this.handleKeyCommand.bind(_this);
    return _this;
  }

  _createClass(SlateEditor, [{
    key: 'handleKeyCommand',
    value: function handleKeyCommand(command) {
      var newState = _draftJs.RichUtils.handleKeyCommand(this.state.editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var editorState = this.state.editorState;

      return _react2.default.createElement(_draftJs.Editor, {
        handleKeyCommand: this.handleKeyCommand,
        editorState: editorState,
        onChange: this.onChange
      });
    }
  }]);

  return SlateEditor;
}(_react2.default.Component);

module.exports = SlateEditor;
//# sourceMappingURL=editor.js.map

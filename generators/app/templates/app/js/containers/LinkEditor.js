'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkEditor = function (_Component) {
  _inherits(LinkEditor, _Component);

  function LinkEditor(props) {
    _classCallCheck(this, LinkEditor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LinkEditor).call(this, props));

    _this.state = {
      urlValue: '',
      titleValue: '',
      editorState: props.editorState
    };

    _this.onURLChange = function (e) {
      return _this.setState({ urlValue: e.target.value });
    };
    _this.onTitleChange = function (e) {
      return _this.setState({ titleValue: e.target.value });
    };

    _this.confirmLink = _this._confirmLink.bind(_this);
    _this.onLinkInputKeyDown = _this._onLinkInputKeyDown.bind(_this);
    _this.removeLink = _this._removeLink.bind(_this);
    return _this;
  }

  _createClass(LinkEditor, [{
    key: '_confirmLink',
    value: function _confirmLink() {
      var _this2 = this;

      e.preventDefault();
      var _state = this.state;
      var editorState = _state.editorState;
      var urlValue = _state.urlValue;

      var entityKey = Entity.create('LINK', 'MUTABLE', { url: urlValue });
      this.setState({
        editorState: _draftJs.RichUtils.toggleLink(editorState, editorState.getSelection(), entityKey),
        urlValue: ''
      }, function () {
        setTimeout(function () {
          return _this2.refs.editor.focus();
        }, 0);
      });
    }
  }, {
    key: '_onLinkInputKeyDown',
    value: function _onLinkInputKeyDown() {
      console.log('onLinkInputKeyDown');
    }
  }, {
    key: '_removeLink',
    value: function _removeLink() {
      console.log('removeLink');
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var editorState = _props.editorState;
      var onChange = _props.onChange;
      var position = _props.position;


      console.log(this.props);

      console.log('position: ', position);

      return _react2.default.createElement(
        'div',
        { style: position, className: 'linkEditor' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', { type: 'text', name: 'linkUrl' }),
          _react2.default.createElement(
            'button',
            { onMouseDown: this.confirmLink },
            _react2.default.createElement('i', { 'class': 'fa fa-check' })
          ),
          _react2.default.createElement(
            'button',
            { onMouseDown: this.removeLink },
            _react2.default.createElement('i', { 'class': 'fa fa-times' })
          )
        )
      );
    }
  }]);

  return LinkEditor;
}(_react.Component);

exports.default = LinkEditor;
//# sourceMappingURL=LinkEditor.js.map

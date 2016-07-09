'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJsExportHtml = require('draft-js-export-html');

var _jsBeautify = require('js-beautify');

var beautifier = _interopRequireWildcard(_jsBeautify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var beautyOptions = {
  "indent_size": 4,
  "indent_char": " ",
  "unescape_strings": false,
  "wrap_line_length": 80,
  "wrap_attributes": "auto",
  "wrap_attributes_indent_size": 4,
  "end_with_newline": true
};

var MarkupPreview = function (_Component) {
  _inherits(MarkupPreview, _Component);

  function MarkupPreview(props) {
    _classCallCheck(this, MarkupPreview);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MarkupPreview).call(this, props));
  }

  _createClass(MarkupPreview, [{
    key: 'getHtml',
    value: function getHtml(editorState) {
      var contentState = editorState.getCurrentContent();
      var renderedHtml = (0, _draftJsExportHtml.stateToHTML)(contentState);
      var beautifulHtml = beautifier.html(renderedHtml, beautyOptions);
      return beautifulHtml;
    }
  }, {
    key: 'render',
    value: function render() {
      var renderedHtml = this.getHtml(this.props.editorState);

      return _react2.default.createElement(
        'div',
        { className: 'markupPreview' },
        _react2.default.createElement(
          'code',
          null,
          renderedHtml
        )
      );
    }
  }]);

  return MarkupPreview;
}(_react.Component);

exports.default = MarkupPreview;
//# sourceMappingURL=MarkupPreview.js.map

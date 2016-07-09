'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _selection = require('../utils/selection');

var _insertImage2 = require('../modifiers/insertImage');

var _SideToolbar = require('./SideToolbar');

var _SideToolbar2 = _interopRequireDefault(_SideToolbar);

var _LinkEditor = require('./LinkEditor');

var _LinkEditor2 = _interopRequireDefault(_LinkEditor);

var _MarkupPreview = require('./MarkupPreview');

var _MarkupPreview2 = _interopRequireDefault(_MarkupPreview);

var _InlineToolbar = require('../components/InlineToolbar');

var _InlineToolbar2 = _interopRequireDefault(_InlineToolbar);

var _ImageComponent = require('../components/ImageComponent');

var _ImageComponent2 = _interopRequireDefault(_ImageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RichEditor = function (_Component) {
  _inherits(RichEditor, _Component);

  function RichEditor(props) {
    _classCallCheck(this, RichEditor);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RichEditor).call(this, props));

    _this.state = {
      editorState: _draftJs.EditorState.createEmpty(),
      inlineToolbar: { show: false },
      linkEditor: { show: false }
    };

    _this.onChange = function (editorState) {
      if (!editorState.getSelection().isCollapsed()) {
        var selectionRange = (0, _selection.getSelectionRange)();
        var selectionCoords = (0, _selection.getSelectionCoords)(selectionRange);
        _this.setState({
          inlineToolbar: {
            show: true,
            position: {
              top: selectionCoords.offsetTop,
              left: selectionCoords.offsetLeft
            }
          }
        });
      } else {
        _this.setState({ inlineToolbar: { show: false }, linkEditor: { show: false } });
      }

      _this.setState({ editorState: editorState });
      setTimeout(_this.updateSelection, 0);
    };

    _this.linkEditorToggle = function (editorState) {
      if (!editorState.getSelection().isCollapsed()) {
        var selectionRange = (0, _selection.getSelectionRange)();
        var selectionCoords = (0, _selection.getSelectionCoords)(selectionRange);
        _this.setState({
          linkEditor: {
            show: !_this.state.linkEditor.show,
            position: {
              top: selectionCoords.offsetTop + 80,
              left: selectionCoords.offsetLeft
            }
          }
        });
      } else {
        _this.setState({ inlineToolbar: { show: false }, linkEditor: { show: false } });
      }

      _this.setState({ editorState: editorState });
      setTimeout(_this.updateSelection, 0);
    };

    _this.focus = function () {
      return _this.refs.editor.focus();
    };
    _this.updateSelection = function () {
      return _this._updateSelection();
    };
    _this.handleKeyCommand = function (command) {
      return _this._handleKeyCommand(command);
    };
    _this.handleFileInput = function (e) {
      return _this._handleFileInput(e);
    };
    _this.handleUploadImage = function () {
      return _this._handleUploadImage();
    };
    _this.handleLinkEdit = function () {
      return _this._handleLInkEdit();
    };
    _this.toggleBlockType = function (type) {
      return _this._toggleBlockType(type);
    };
    _this.toggleInlineStyle = function (style) {
      return _this._toggleInlineStyle(style);
    };
    _this.insertImage = function (file) {
      return _this._insertImage(file);
    };

    _this.blockRenderer = function (block) {
      if (block.getType() === 'media') {
        return {
          component: _ImageComponent2.default
        };
      }
      return null;
    };

    _this.blockStyler = function (block) {
      if (block.getType() === 'unstyled') {
        return 'paragraph';
      }
      return null;
    };

    return _this;
  }

  _createClass(RichEditor, [{
    key: '_updateSelection',
    value: function _updateSelection() {
      var selectionRange = (0, _selection.getSelectionRange)();
      var selectedBlock = void 0;
      if (selectionRange) {
        selectedBlock = (0, _selection.getSelectedBlockElement)(selectionRange);
      }
      this.setState({
        selectedBlock: selectedBlock,
        selectionRange: selectionRange
      });
    }
  }, {
    key: '_handleKeyCommand',
    value: function _handleKeyCommand(command) {
      var editorState = this.state.editorState;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: '_toggleBlockType',
    value: function _toggleBlockType(blockType) {
      this.onChange(_draftJs.RichUtils.toggleBlockType(this.state.editorState, blockType));
    }
  }, {
    key: '_toggleInlineStyle',
    value: function _toggleInlineStyle(inlineStyle) {
      this.onChange(_draftJs.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    }
  }, {
    key: '_handleLinkEdit',
    value: function _handleLinkEdit(link) {
      console.log(link);
    }
  }, {
    key: '_insertImage',
    value: function _insertImage(file) {
      this.setState({
        editorState: (0, _insertImage2.insertImage)(this.state.editorState, file)
      });
    }
  }, {
    key: '_handleFileInput',
    value: function _handleFileInput(e) {
      var fileList = e.target.files;
      var file = fileList[0];
      this.insertImage(file);
    }
  }, {
    key: '_handleUploadImage',
    value: function _handleUploadImage() {
      this.refs.fileInput.click();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var editorState = _state.editorState;
      var selectedBlock = _state.selectedBlock;
      var selectionRange = _state.selectionRange;

      var sideToolbarOffsetTop = 0;

      if (selectedBlock) {
        var editor = document.getElementById('richEditor');
        var editorBounds = editor.getBoundingClientRect();
        var blockBounds = selectedBlock.getBoundingClientRect();

        sideToolbarOffsetTop = blockBounds.bottom - editorBounds.top - 31; // height of side toolbar
      }

      return _react2.default.createElement(
        'div',
        { className: 'editor', id: 'richEditor', onClick: this.focus },
        selectedBlock ? _react2.default.createElement(_SideToolbar2.default, {
          editorState: editorState,
          style: { top: sideToolbarOffsetTop },
          onToggle: this.toggleBlockType,
          onUploadImage: this.handleUploadImage
        }) : null,
        this.state.inlineToolbar.show ? _react2.default.createElement(_InlineToolbar2.default, {
          editorState: editorState,
          onToggle: this.toggleInlineStyle,
          position: this.state.inlineToolbar.position,
          linkEditorToggle: this.linkEditorToggle
        }) : null,
        this.state.linkEditor.show ? _react2.default.createElement(_LinkEditor2.default, {
          editorState: editorState,
          onChange: this.handleLinkEdit,
          position: this.state.linkEditor.position
        }) : null,
        _react2.default.createElement(_draftJs.Editor, {
          blockRendererFn: this.blockRenderer,
          blockStyleFn: this.blockStyler,
          editorState: editorState,
          handleKeyCommand: this.handleKeyCommand,
          onChange: this.onChange,
          placeholder: 'Write something...',
          spellCheck: true,
          readOnly: this.state.editingImage,
          ref: 'editor'
        }),
        _react2.default.createElement('input', { type: 'file', ref: 'fileInput', style: { display: 'none' },
          onChange: this.handleFileInput }),
        _react2.default.createElement(_MarkupPreview2.default, { editorState: editorState })
      );
    }
  }]);

  return RichEditor;
}(_react.Component);

exports.default = RichEditor;
//# sourceMappingURL=RichEditor.js.map

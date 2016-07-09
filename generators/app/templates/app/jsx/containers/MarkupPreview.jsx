'use strict';

import React, { Component, PropTypes } from 'react';
import { stateToHTML } from 'draft-js-export-html';
import * as beautifier from 'js-beautify';


const beautyOptions = {
    "indent_size": 4,
    "indent_char": " ",
    "unescape_strings": false,
    "wrap_line_length": 80,
    "wrap_attributes": "auto",
    "wrap_attributes_indent_size": 4,
    "end_with_newline": true
};

class MarkupPreview extends Component {
  constructor(props) {
    super(props);
  }

  getHtml(editorState) {
    let contentState = editorState.getCurrentContent();
    let renderedHtml = stateToHTML(contentState);
    let beautifulHtml = beautifier.html(renderedHtml, beautyOptions);
    return beautifulHtml;
  }

  render() {
    let renderedHtml = this.getHtml(this.props.editorState);

    return (
      <div className="markupPreview">
        <code>
          {renderedHtml}
        </code>
      </div>
    );
  }
}

export default MarkupPreview;

'use strict';

import React from 'react';
import RichEditor from '../containers/RichEditor';
import MarkupPreview from '../containers/MarkupPreview';


class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="editorContainer">
        <RichEditor />
      </div>
    )
  }
};

module.exports = Index;

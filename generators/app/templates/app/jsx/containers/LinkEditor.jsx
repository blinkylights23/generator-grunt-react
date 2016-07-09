'use strict';

import React, { Component } from 'react';
import { RichUtils } from 'draft-js';


class LinkEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlValue: '',
      titleValue: '',
      editorState: props.editorState
    };

    this.onURLChange = (e) => this.setState({urlValue: e.target.value});
    this.onTitleChange = (e) => this.setState({titleValue: e.target.value});

    this.confirmLink = this._confirmLink.bind(this);
    this.onLinkInputKeyDown = this._onLinkInputKeyDown.bind(this);
    this.removeLink = this._removeLink.bind(this);
  }

  _confirmLink() {
    e.preventDefault();
    const {editorState, urlValue} = this.state;
    const entityKey = Entity.create('LINK', 'MUTABLE', {url: urlValue});
    this.setState({
      editorState: RichUtils.toggleLink(
        editorState,
        editorState.getSelection(),
        entityKey
      ),
      urlValue: '',
    }, () => {
      setTimeout(() => this.refs.editor.focus(), 0);
    });
  }

  _onLinkInputKeyDown() {
    console.log('onLinkInputKeyDown');
  }

  _removeLink() {
    console.log('removeLink');
  }

  render() {
    const { editorState, onChange, position } = this.props;

    console.log(this.props);

    console.log('position: ', position);

    return (
      <div style={position} className="linkEditor">
        <div>
          <input type="text" name="linkUrl" />
          <button onMouseDown={this.confirmLink}>
            <i class="fa fa-check"></i>
          </button>
          <button onMouseDown={this.removeLink}>
            <i class="fa fa-times"></i>
          </button>
        </div>
      </div>
    )
  }

}

export default LinkEditor;

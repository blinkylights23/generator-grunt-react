import React from 'react';
import ToolbarIcon from '../components/ToolbarIcon';

const INLINE_STYLES = [
  { icon: 'a-bold', style: 'BOLD' },
  { icon: 'a-italic', style: 'ITALIC' },
  { icon: 'a-underline', style: 'UNDERLINE' },
  { icon: 'a-code', style: 'CODE' }
];

export default ({ editorState, onToggle, position, linkEditorToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();
  return (
    <div
      className="toolbar"
      id="inlineToolbar"
      style={position}
    >
      <ul className="toolbar-icons">
        {INLINE_STYLES.map(type =>
          <ToolbarIcon
            key={type.label || type.icon}
            active={currentStyle.has(type.style)}
            label={type.label}
            icon={type.icon}
            onToggle={onToggle}
            style={type.style}
          />
        )}
        <ToolbarIcon
          key='a-link'
          active={false}
          icon='a-link'
          onToggle={linkEditorToggle}
          style={editorState}
        />
      </ul>
    </div>
  )
};

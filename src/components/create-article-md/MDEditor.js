import React from 'react';
import MDEditor from '@uiw/react-md-editor';

// eslint-disable-next-line no-unused-vars

const MarkdownEditor = ({ editorState, setEditorState }) => {
  // const [value, setValue] = useState(source);
  return (
    <div className="container">
      <MDEditor
        value={editorState}
        onChange={setEditorState}
        // preview="edit"
        height={400}
      />
      <div className="margin-tb-2rem">
        <MDEditor.Markdown source={editorState} style={{ whiteSpace: 'pre-wrap' }} />
      </div>
    </div>
  );
};

export default MarkdownEditor;

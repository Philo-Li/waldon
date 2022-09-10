import React from 'react';
import MDEditor from '@uiw/react-md-editor';

// eslint-disable-next-line no-unused-vars
const source = `
## Features

- 📑 Indent line or selected text by pressing tab key, with customizable indentation.
- 🚘 Automatic list on new lines.
- 😻 GitHub flavored markdown support.
- 🌒 Support dark-mode/night-mode **@v3.11.0+**.
- 💡 Support [next.js](https://github.com/uiwjs/react-md-editor/issues/52#issuecomment-848969341), [Use examples](#support-nextjs) in [next.js](https://nextjs.org/).`;

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

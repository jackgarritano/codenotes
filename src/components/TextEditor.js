import {useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from '@/styles/Home.module.css';

export default function TextEditor(){
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
    editorProps: {
      attributes: {
        class: styles.editor1,
      },
    },
  });

  return <EditorContent editor={editor} className={styles.editor2}/>;
}
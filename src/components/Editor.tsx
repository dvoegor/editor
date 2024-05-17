import '../../styles/editor.scss'

interface EditorProps {
  content: string
  setContent: React.Dispatch<React.SetStateAction<string>>
}

function Editor({ content, setContent }: EditorProps) {
  return (
    <div>
      <textarea
        className='editorInput'
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    </div>
  )
}

export default Editor

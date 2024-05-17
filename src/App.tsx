import { useState } from 'react'
import Article from './components/Article'
import Editor from './components/Editor'
import Header from './components/Header'
import { text } from '../assets/text'
import '../styles/index.scss'

function App() {
  const [content, setContent] = useState(text)

  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Editor content={content} setContent={setContent} />
        <Article content={content} />
      </div>
    </div>
  )
}

export default App

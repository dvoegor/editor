import '../../styles/editor.scss'

interface ArticleProps {
  content: string
}

function Article({ content }: ArticleProps) {
  function renderArticle(text: string): string {
    text = text.replace(
      />(.*?)>/g,
      '<blockquote style="margin: 0; padding: 10px; background-color: #f9f9f9; border-left: 5px solid #ccc; font-style: italic;">$1</blockquote>'
    )
    text = text.replace(/#1(.*?)#1/g, '<h1>$1</h1>')
    text = text.replace(/#2(.*?)#2/g, '<h2>$1</h2>')
    text = text.replace(/#3(.*?)#3/g, '<h3>$1</h3>')
    text = text.replace(/#4(.*?)#4/g, '<h4>$1</h4>')
    text = text.replace(/#5(.*?)#5/g, '<h5>$1</h5>')
    text = text.replace(/#6(.*?)#6/g, '<h6>$1</h6>')
    text = text.replace(/\*(.*?)\*/g, '<strong>$1</strong>')
    text = text.replace(/_(.*?)_/g, '<em>$1</em>')
    text = text.replace(
      /\[img:(.*?)]/g,
      `<img style="width: 100%; height: auto;" src="$1"/>`
    )
    text = text.replace(
      /\[file:(.*?)]/g,
      `<a href="$1" download ><button>Скачать файл</button></a>`
    )
    text = text.replace(
      /```([^`]+)```/g,
      `<p style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; border-radius: 5px;">
      $1
  </p>
  `
    )
    text = text.replace(/\n/g, '<br>')
    return text
  }

  return (
    <div
      className='article'
      dangerouslySetInnerHTML={{ __html: renderArticle(content) }}
    />
  )
}

export default Article

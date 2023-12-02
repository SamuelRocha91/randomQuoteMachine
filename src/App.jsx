import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState({author: '', content: ''})
  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((data) => data.json())
      .then(({ author, content }) => setQuote({ author, content }))
      .catch(error => console.error('Erro ao obter a citação:', error));
  }, [])

  const handleClick = () => {
        fetch('https://api.quotable.io/random')
      .then((data) => data.json())
      .then(({ author, content }) => setQuote({ author, content }))
      .catch(error => console.error('Erro ao obter a citação:', error));
  }

  return (
    <>
      <div id="quote-box">
        <div id="text">
          <p id='text-content'>&quot;{ quote.content}&quot;</p>
          <span id="author">{quote.author}</span>
          <div className='icons-links'>
            <button onClick={handleClick} id="new-quote">New Quote</button>
            <a  rel="noreferrer" target="_blank" href="https://twitter.com/intent/tweet" id="tweet-quote"><i className="bi bi-twitter-x"></i></a>
          </div>
        </div>
     </div>
    </>
  )
}

export default App

import { useState } from 'react';
import './App.css'
import Test from './components/Test';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import DarkMode from './components/DarkMode';

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const title = 'React'




  function getTitle(title) {
    return title
  }

  const list = [
    {
      title: "React",
      url: "React.com",
      author: "Facebook",
      num_comments: "1000",
      points: "4.5",
      objectID:  "0",
    },
    {
      title: "Next.js",
      url: "Next.com",
      author: "Vercel",
      num_comments: "500",
      points: "2.5",
      objectID:  "1",
    }
  ]


  const welcome = {
    gretting: 'Hey!!',
    title: 'Vue.js'
  }

  return (
    <>
    <h1>
      {welcome.gretting} {welcome.title}
    </h1>
    <h1>
       Hello {getTitle('Orlando')}
    </h1>

    <label htmlFor="serach">Search: </label>
    <input type="text" name="search" id="search" onChange={handleChange} />
    <p>
      Searching for <strong>{searchTerm}</strong>
    </p>
    <hr />

    <ul>
      {list.map(function (item) {
        return <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>          
          </li>
      })}
    </ul>

      <br />

      <Counter />
      <br />
      <Toggle />
      <br />
      <DarkMode />
    </>
  )
}

export default App

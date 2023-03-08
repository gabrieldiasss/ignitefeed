import { Header } from './components/Header'
import './global.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabrieldiasss.png",
      name: 'Gabriel',
      role: 'CEO Além do Código',
    },
    content: [
      { type: 'paragraph', contet: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-11-25 22:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/mayk.png",
      name: 'Mayk',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', contet: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],

    publishedAt: new Date('2022-11-25 20:00:00'),
  },
]

// itereção 
function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App

import Header from './components/Header'
import Main from './components/Main'
import data from './data'

const App = () => {
    const cards = data.map(item => {
        return <Main key={item.id} item={item} />
    })

  return (
    <div>
          <Header />
          {cards}
    </div>
  )
}

export default App

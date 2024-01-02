import Header from './Header'
import Content from './body/Content'
import Foot from './body/Foot'
const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Content />
        <Foot />
      </main>
    </div>
  )
}
export default App

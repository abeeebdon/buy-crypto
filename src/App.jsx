import { useState } from 'react'
import Header from './Header'
import Content from './body/Content'
import Foot from './body/Foot'
import useWindowSize from './hooks/useWindowSize'
import SideBar from './SideBar'
const App = () => {
  const [toggleHead, setToggleHead] = useState(false)
  const { width } = useWindowSize()

  return (
    <div className="App">
      <Header
        width={width}
        toggleHead={toggleHead}
        setToggleHead={setToggleHead}
      />
      {toggleHead && width <= 500 && <SideBar setToggleHead={setToggleHead} />}
      <main>
        <Content />
        <Foot />
      </main>
    </div>
  )
}
export default App

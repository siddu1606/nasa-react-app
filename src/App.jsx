import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"


function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const [ showModel, setShowModel] = useState(false);

  function handleToggleModle(){
    setShowModel(!showModel);
  }

  useEffect(() =>{
    async function fetchAPIData(){
      const NASA_KEY = 'kgjTdHgbhMmlt9y13PshWwmPNX0paXbLc4a6kiBy';
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date().toDateString())
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        return
      }
      localStorage.clear()

      try{
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
      } catch (err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, []) // => run this functioin whenever this page loads

  return (
    <>
    { data ?  (<Main data={data} /> ) : (
      <div className="loadingsate" >
        <i className="fa-solid fa-gear"></i>
      </div>
    )}
    { showModel && (
          <SideBar data={data} handleToggleModle={handleToggleModle} />
    )}
     { data && (<Footer data={data} handleToggleModle={handleToggleModle} />)}
    </>
  )
}

export default App

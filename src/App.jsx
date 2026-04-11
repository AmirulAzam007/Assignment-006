import Banner from "./Component/Banner"
import Footer from "./Component/Footer"
import FourthBanner from "./Component/FourthBanner"
import NavBar from "./Component/NavBar"
import SecondBanner from "./Component/SecondBanner"
import Stats from "./Component/Stats"
import ThirdBanner from "./Component/ThirdBanner"
import Models from "./Component/Models"

const getmodels = async () => {
  const res = await fetch("/modelsdata.json")
  return res.json()
}

const modelpromise = getmodels()

function App() {


  return (
    <>
       <NavBar></NavBar>
       <Banner></Banner>
       <Stats></Stats>
       <Models modelpromise={modelpromise}></Models>
       <SecondBanner></SecondBanner>
       <ThirdBanner></ThirdBanner>
       <FourthBanner></FourthBanner>
       <Footer></Footer>
    </>

  )
}

export default App

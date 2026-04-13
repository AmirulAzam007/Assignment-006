import Banner from "./Component/Banner"
import Footer from "./Component/Footer"
import FourthBanner from "./Component/FourthBanner"
import NavBar from "./Component/NavBar"
import SecondBanner from "./Component/SecondBanner"
import Stats from "./Component/Stats"
import ThirdBanner from "./Component/ThirdBanner"
import Models from "./Component/Models"

import Tabs from "./Component/Tabs"
import { useState } from "react"
import Carts from "./Component/Carts"
const getmodels = async () => {
  const res = await fetch("/modelsdata.json")
  return res.json()
}

const modelpromise = getmodels()

function App() {

  const [cardInfo, setCardInfo] = useState("model")

  const [carts, setCarts] = useState([])


  return (
    <>
       <NavBar carts={carts}></NavBar>
       <Banner></Banner>
       <Stats></Stats>
       <Tabs setCardInfo={setCardInfo} carts={carts} cardInfo={cardInfo}></Tabs>

      {cardInfo === "model" && <Models modelpromise={modelpromise} carts={carts} setCarts={setCarts} ></Models>}
      {cardInfo === "cart" && <Carts carts={carts} setCarts={setCarts}></Carts>}

       <SecondBanner></SecondBanner>
       <ThirdBanner></ThirdBanner>
       <FourthBanner></FourthBanner>
       <Footer></Footer>
    </>

  )
}

export default App

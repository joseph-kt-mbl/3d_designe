import './App.css'
import ThreeDCard from './3dCard/ThreeDCard'
import nikeAir from './assets/air-jordan.png'
import logo from './assets/logo_nike_white.png'
import adidas_blue from './assets/adidas_blue.png'
import adidasLogo from './assets/adidas-white-logo.png'



function App() {

  const ProductsList = [
    {
      imgs:{
        product:nikeAir,
        logo:logo
      },
      about:{
        color:'gold' ,
        model:'NIKE AIR',
        make:'NIKE',
        productName:'AIR JORDAN 1 MID SE GC',
        slogan:'Your Next Shoe',
        price:'856 $'
      }
    },
    {
      imgs:{
        product:adidas_blue,
        logo:adidasLogo
      },
      about:{
        color:'blue' ,
        model:'ADIDAS',
        make:'ADIDAS',
        productName:'Campuse 00s',
        slogan:'Simple and Beautiful',
        price:'799 $'
      }
    }
  ]

  return (
    
    <>
    {
      ProductsList && ProductsList.map((prd,index) =>{
        return(
          <ThreeDCard key={index+1}
            images={prd.imgs} 
            about={prd.about}
          />
        )
      })
    }</>
  )
}

export default App
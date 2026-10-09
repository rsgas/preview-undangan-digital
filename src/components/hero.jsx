
import PrimText from './subComponents/primText'
import Abtn from '../components/subComponents/aBtn'

// import Btn from './subComponents/btn'


function Hero () {
    return (
        <>
        <div className="hero-wrap">
         <PrimText text="In Engaged Of Name.. & Name.." className="hero-title"/> 
        </div>
         <br />
         <Abtn text="Click here to starts journey!" link="#about" className="secondary-color"/>
        </>
    )
}

export default Hero
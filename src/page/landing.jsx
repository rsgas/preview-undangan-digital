
import PrimText from '../components/subComponents/primText.jsx'
import SecText from '../components/subComponents/secText.jsx'   
import ParText from '../components/subComponents/parText.jsx'
import ArtText from '../components/subComponents/artText.jsx'
import PrimLink from '../components/subComponents/primLink.jsx'
import Btn from '../components/subComponents/btn.jsx'


function Landing() {
    return (
        <>
            <div className="container">
                {/* <div className="wrapper">
                    <h1 className="primary-text primary-font">Primary Text!</h1>
                    <h2 className="secondary-text secondary-font">Secondary Text!</h2>
                    <p className="paragraph-text paraf-font">Paragraph Text!</p>

                    <span className="artistic-text artistic-font">Artistic Text!</span>

                    <a className="primary-button secondary-color" onClick={() => {
                        alert("You clicked the primary button!");
                    }}>Primary Button!</a>

                    <a href="#" className="primary-link">
                        This is a primary link!
                    </a>
                </div> */}
                <div className="wrapper">
                    <PrimText text="This is a primary text component!" />
                    <SecText text="This is a secondary text component!" />
                    <ParText text="This is a paragraph text component!" />
                    <ArtText text="This is an artistic text component!" />
                    <Btn text="This is a primary button component!" onClick={() => {
                        alert("You clicked the primary button!");
                    }} />
                    <PrimLink text="This is a primary link component!" href="#" />
                </div>
            </div>
        </>
    )
}

export default Landing
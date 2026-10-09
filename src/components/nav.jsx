import Btn from "./subComponents/btn";
import PrimLink from "./subComponents/primLink";
import PrimText from "./subComponents/primText";

import { useState } from "react";

function Nav() {
    const nSteps = [
        "The Beginning?",
        "Our Years?",
        "The Moment?",
        "The Promise?",
        "The Wedding!",
        "Location!",
        "RSVP!",
        "Ends! Hope You Coming :)",
        // "Cyaaa"
    ];
    const [content, setContent] = useState(nSteps[0])

    function setterNavigation () {
        setContent((prev) => {
            const check = nSteps.indexOf(prev)

            const navigation = () => {
                if (check === nSteps.length - 1) {
                    return 0
                } else {
                    return check + 1
                }
            }
            // console.log(navigationSteps[navigation()])
            return nSteps[navigation()]
        })
    }
   return (
     <>
        <div className="nav-container">
            <div className="nav-wrapper">
                <div className="nav-title">
                    <PrimText text="Hi" />
                </div>
                {/* <div className="nav-content">
                    <PrimLink text="Home" href="#" />
                    <PrimLink text="About" href="#first-section" />
                    <PrimLink text="Contact" href="#second-section" />
                </div> */}
                <div className="nav-footer">
                    <Btn text={content} onClick={() => {
                        setterNavigation()
                        
                    }} />

                </div>
            </div>
        </div>
    </>
   )
}

export default Nav
import Btn from "./subComponents/btn";
import PrimLink from "./subComponents/primLink";
import PrimText from "./subComponents/primText";


function Nav() {
   return (
     <>
        <div className="nav-container">
            <div className="nav-wrapper">
                <div className="nav-title">
                    <PrimText text="Hi" />
                </div>
                <div className="nav-content">
                    <PrimLink text="Home" href="#" />
                    <PrimLink text="About" href="#first-section" />
                    <PrimLink text="Contact" href="#second-section" />
                </div>
                <div className="nav-footer">
                    <Btn text="Skips!" onClick={() => {
                        alert("Are you sure you want to skip?");
                    }} />
                </div>
            </div>
        </div>
    </>
   )
}

export default Nav
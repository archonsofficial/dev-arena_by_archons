
import {DHBox,DHboxAltside} from "./DisplayHorizontalbox"
import DVBox from "./DisplayVerticalbox";

export default function Features() {
  return (
    <>
        {/*Learn and Practice */}
        <div className="app3">
        <div className="container app3-container">
          <p1 className="lp">Learn & Practice</p1>
         <DHBox i={0} Cname="border1"/>
         <DHboxAltside j={1} Cname="border1"/>
         <DHBox i={2} Cname="border1"/>
        </div>
        <div className="glow-circle3"></div>
        <div className="glow-circle4"></div>
      </div>
      <div className="space"></div>
{/*Collaboration and Community*/}
<div className="app3">
        <div className="container">
          <p1 className="lp">Collaboration and Community</p1>
         <div className="DV-Box-container flex"> 
          <DVBox i={0} Cname="First-border"/>
         </div>
        
        </div>
        <div className="glow-circle gc5"></div>
        <div className="glow-circle gc6"></div>
      </div>
{/* Challenges & Competitions*/}
<div className="app3">
        <div className="container">
          <p1 className="lp">Challenges & Competitions</p1>
         <div className="DV-Box-container flex"> 
          <DVBox i={2} Cname="Second-border"/>
         </div>
        
        </div>
        {/* <div className="glow-circle3"></div>
        <div className="glow-circle4"></div> */}
      </div>
      <div className="space"></div>

{/*Achievements & Rewards*/}
 <div className="app3">
        <div className="container  AandR-container" >
          <p1 className="lp">Achievements & Rewards</p1>
         <DHBox i={3} Cname="border2"/>
         <DHboxAltside j={4} Cname="border2"/>
         <DHBox i={5} Cname="border2"/>
        </div>
        {/* <div className="glow-circle3"></div>
        <div className="glow-circle4"></div> */}
      </div>

      <div className="space"></div>
{/* app7 */}
<div className="app3 flex">
        <div className="container">
          <p1 className="lp">Real-Life Projects</p1>
         <DHBox i={6} Cname="border3"/>
         <DHboxAltside j={7} Cname="border4"/>
        </div>
        {/* <div className="glow-circle3"></div>
        <div className="glow-circle4"></div> */}
      </div>
      <div className="space"></div>
    </>
  )
}

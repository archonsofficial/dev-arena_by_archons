import FAQ_section from "./FAQs";
import './FAQs.css'
export default function FAQ_page() {
  return (
    <>
      <div className="space">
<h3 className="Heading side-text" >Frequently Asked Questions</h3>
</div>
<div className="app3 FAQ-page">
<div className="container FAQ-container">
<FAQ_section i={0}/>
<FAQ_section i={1}/>
<FAQ_section i={2}/>
<FAQ_section i={3}/>
<FAQ_section i={4}/>
<FAQ_section i={5}/>
</div>
</div>
<div className="space"></div>
    </>
  )
}

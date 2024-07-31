import Testimonial_box from "./Testimonial";

export default function Testimonial_page() {
  return (
    <>
      <div className="space">
  <h3 className="Heading side-text">Testimonials</h3>
</div>

<div className="app3 Testimonial-page flex">

<div className="container Testimonial-container">
<Testimonial_box i={0}/>
<Testimonial_box i={1}/>
<Testimonial_box i={2}/>
<Testimonial_box i={3}/>
</div>
{/* <div className="glow-circle gc20"></div>
<div className="glow-circle gc21"></div> */}
</div>
<div className="space"></div>
    </>
  )
}

import TestimonialBox from "./Testimonial";

export default function TestimonialPage() {
  return (
    <>
      <div className="space">
        <h3 className="Heading side-text">Testimonials</h3>
      </div>

      <div className="app3 Testimonial-page flex">
        <div className="container Testimonial-container">
          <TestimonialBox i={0} />
          <TestimonialBox i={1} />
          <TestimonialBox i={2} />
          <TestimonialBox i={3} />
        </div>
        {/* <div className="glow-circle gc20"></div>
<div className="glow-circle gc21"></div> */}
      </div>
      <div className="space"></div>
    </>
  );
}

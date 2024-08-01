import FAQSection from "./FAQs";
import "./FAQs.css";
export default function FAQPage() {
  return (
    <>
      <div className="space">
        <h3 className="Heading side-text">Frequently Asked Questions</h3>
      </div>
      <div className="app3 FAQ-page">
        <div className="container FAQ-container">
          <FAQSection i={0} />
          <FAQSection i={1} />
          <FAQSection i={2} />
          <FAQSection i={3} />
          <FAQSection i={4} />
          <FAQSection i={5} />
        </div>
      </div>
      <div className="space"></div>
    </>
  );
}

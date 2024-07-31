import './Testimonial.css'
import {imagesarray,data} from '../../Modules/Testimonialdata'
function Testimonial_box({i}){
return(
    <>
    <div className="T-box-container">
        <div className="Testimonial-img-box"> <img id="T-image" src={imagesarray[i]} alt="" /></div>
            <div className="T-text-container">
        <h4>{data[i].name}</h4>
            <p>{data[i].Review}</p>
            </div>
        
    </div>
    </>
)
}

export default Testimonial_box
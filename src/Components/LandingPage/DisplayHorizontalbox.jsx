import './DisplayHorizontalbox.css'
import {data} from '../../Modules/DHBoxdata'
function DHBox({i,Cname}){
    return (
        <>
      <div className={`c3 ${Cname}`}>
      <div className='DH-inner-container' >
            <div className="a3textbox">
                <p className="a3text">{data[i].H1}</p>
            <p2>{data[i].desc}.</p2></div>
            <div className="DH-image-box"><img src="https://viaplaceholder.com/200" alt="" /></div>
          </div>
      </div>
        </>
    )
}
function DHboxAltside({j,Cname}){
    return(
        <div className={`c3 ${Cname}`}>
           <div className="DH-inner-container">
           <div className="DH-image-box"><img src="https://viaplaceholder.com/200" alt="" /></div>
            <div className="a3textbox"><p className="a3text">{data[j].H1}</p>
            <p2>Test your knowledge and earn points with daily quizzes.</p2></div>
           </div>
          </div>
    )
}

export { DHBox,DHboxAltside}
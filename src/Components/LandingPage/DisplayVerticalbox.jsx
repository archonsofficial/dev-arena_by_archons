import './DisplayVerticalbox.css'
import {data} from '../../Modules/DVBoxdata'
function DVBox({i,Cname}){
    return (
        <>
        <div className={`c4 ${Cname}`}>
       <div className="DV-inner-container">
       <img id='app4img' src={data[i].img} />
            <div className="a4textbox">
                <p>{data[i].header}</p>
                <p2>{data[i].desc}</p2>
            </div>
       </div>
        </div>
        <div className={`c4 ${Cname}`}>
       <div className="DV-inner-container">
       <img id='app4img' src={data[++i].img} />
            <div className="a4textbox">
                <p>{data[i].header}</p>
                <p2>{data[i].desc}</p2>
            </div>
       </div>
        </div>


   
        </>
    )
}

export default DVBox
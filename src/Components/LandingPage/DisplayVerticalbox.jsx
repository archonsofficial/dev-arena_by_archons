import './DisplayVerticalbox.css'
import {data} from '../../Modules/DVBoxdata'
function DVBox({i,Cname}){
    return (
        <>
        <div className={`c4 ${Cname}`}>
        <img id='app4img' src="https://placehold.jp/150x150.png" />
            <div className="a4textbox">
                <p>{data[i].header}</p>
                <p2>{data[i].desc}</p2>
            </div>
        </div>

        <div className={`c4 ${Cname}`}>
        <img id='app4img' src="https://placehold.jp/150x150.png" />
            <div className="a4textbox">
                <p>{data[++i].header}</p>
                <p2>{data[i].desc}</p2>
            </div>
        </div>
        </>
    )
}

export default DVBox
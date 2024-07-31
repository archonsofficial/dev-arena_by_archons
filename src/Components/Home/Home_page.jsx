import React from "react";
import Top_nav from "./Top_nav";
import Side_nav from "./Side_nav";
import Update_box from "./Update_box";
import "./Home_page.css";
import Notify from "./Notify";
import Solo_leadboard from "./Solo_leadboard";
import Team_leadboard from "./Team_leadboard";
import Rside_team_id from "./Rside_team_id";
import RSide_id from "./RSide_id";
// import { ChakraProvider } from '@chakra-ui/react';


function Home() {
  return (
    
    <>
      <div id="mainbody2">
        <Top_nav />
        <div id="mainbody">
          <Side_nav />
          <div className="centerbx">
            <Update_box />
            <Notify />
            <div className="leader-boardset">
              <Solo_leadboard />
              <Team_leadboard />
            </div>
          </div>
          <div className="side_profile">
            <RSide_id/>
            <Rside_team_id/> 
            <br/>
            <br/>
            <br/>
            <br />

            {/* <hr /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

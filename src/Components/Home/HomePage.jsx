import React from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import UpdateBox from "./UpdateBox";
import "./HomePage.css";
import Notify from "./Notify";
import SoloLeadboard from "./SoloLeadboard";
import TeamLeadboard from "./TeamLeadboard";
import RsideTeamId from "./RsideTeamId";
import RSideId from "./RSideId";
// import { ChakraProvider } from '@chakra-ui/react';

function Home() {
  return (
    <>
      <div id="mainbody2">
        <TopNav />
        <div id="mainbody">
          <SideNav />
          <div className="centerbx">
            <UpdateBox />
            <Notify />
            <div className="leader-boardset">
              <SoloLeadboard />
              <TeamLeadboard />
            </div>
          </div>
          <div className="side_profile">
            <RSideId />
            <RsideTeamId />
            <br />
            <br />
            <br />
            <br />

            {/* <hr /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

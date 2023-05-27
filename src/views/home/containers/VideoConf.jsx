import React from 'react'
import {
    Button
  } from "reactstrap";
import { BsFillChatDotsFill } from "react-icons/bs";

const VideoConf = () => {
  return (
    // <Button
    //     className="video-button rounded-circle text-center"
    //     color="success"
    //     // onClick={toggle}
    //     style={{ zIndex: 3 }}
    //   >
    <a href='/conference'>
        <img src={require("../../../assets/img/chatr/Light Logo.png")} className='video-button' alt="Video Conference - Chatr" width={80} />
    </a>
    //  </Button>
  )
}

export default VideoConf
import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const randomID = (len) => {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
  }
  
const getUrlParams = (
    url = window.location.href
  ) => {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
  }

const Room = () => {
    const {roomID} = useParams();
    const [joined, setJoined] = useState(false)

    let myMeeting = async (element) => {
        // generate Kit Token
         const appID = 2106788575;
         const serverSecret = "5b6da55813d5f1c42f2f5f797174e1a1";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  "Anonymous");
   
        
            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            if(zp.hasJoinedRoom){
                window.location.reload()
            }
            // start the call
            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Personal link',
                        url: window.location.href
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
                },
            });

        }

  return (
    <div
    className="myCallContainer bg-dark"
    ref={myMeeting}
    style={{ width: '100vw', height: '100vh' }}
  ></div>
  )
}

export default Room
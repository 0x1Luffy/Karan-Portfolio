import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import AppContext from "../components/AppContextFolder/AppContext";
import { useRef, useState } from "react";
import CustomCursor from "../components/MouseCursor/CustomCursor";


function MyApp({ Component, pageProps}) {
  const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling:{
        IntervalEvent:null
      }
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });
  return (
  
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      
      <CustomCursor/>
      <Component {...pageProps} />
      
      <Analytics />
    
    </AppContext.Provider>

    
  );
}

export default MyApp;
import React, {useState, useEffect,useRef} from "react";
import * as Styled from "./styled";
import './App.css';
import video from './Video/video.mp4'





function App() {

  const [anim, setAnim] = useState (false)
 const [full, setFull] = useState (false)





useEffect(()=> {

window.onscroll = function() {ScrollFunction()};


function ScrollFunction() {
  if (document.documentElement.scrollTop < 20) {

   setAnim(true)
   setFull(false)

  }
  else if(document.documentElement.scrollTop >30 || document.body.scrollTop > 30 ){
    setFull(true)
    setAnim(false)
  }

  
}
},[anim, full])

/*useEffect(() => {

document.getElementById("fullvideo").addEventListener('scroll', handleScroll)

function handleScroll() {
  if (document.getElementById("fullvideo").scrollTop < 100) {

   setAnim(false)
   setFull(false)

  } 
}
return () => {

  document.getElementById("fullvideo").removeEventListener('scroll', handleScroll)


}
},[anim, full])*/





  return (<>
  {!anim && !full && <Styled.Wrapper >

    <Styled.Video  
    muted    
  autoPlay={"autoplay"}
  preLoad="auto"
  loop   
  src={video} 
  type="video/mp4"
  >
 </Styled.Video>
 </Styled.Wrapper>}


  {anim  && !full && <Styled.WrapperAnim  >

  <Styled.Video 
  muted 
  autoPlay={"autoplay"}
  preLoad="auto"
  loop   
  src={video} 
  type="video/mp4"
  >
    </Styled.Video>

</Styled.WrapperAnim> }


 { full && !anim && <Styled.Wrapper >

  <Styled.VideoFull 
  muted  
  autoPlay={"autoplay"}
  preLoad="auto"
  loop   
  src={video} 
  type="video/mp4"
  >
    </Styled.VideoFull>

  </Styled.Wrapper> } 


</>
  
  );
}

export default App;

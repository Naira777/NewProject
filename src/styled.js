import styled, { keyframes } from "styled-components";


const fullscreen = keyframes` 
{
    0%  { width: 900px; height: 400px; margin-left: 300px; margin-right: 200px; margin-top: 200px;}
        
    }
 
     100% { width: 100vw; height: 100vh; margin-left: 0; margin-right: 0; margin-top: 0;)
  }

  }
`;
const anim = keyframes` 
 {
    0%   {transform: scale(1)}
   
    100% {transform: scale(1.25, 1.25)}
  }`;

export const Wrapper = styled.div`

margin-top:  400px;
margin-left: 250px;
//position: relative;
width: 900px;
height: 400px;
overflow: hidden;
border-radius: 20px;

 }
`;

export const Video = styled.video`


left: 0;
top: 0;


 }
`;


export const VideoFull = styled.video`
  
width: 100vw;
height: 100vh;
object-fit:  cover;
position: absolute;
left: 0;
top: 0;

    animation-name: ${fullscreen};
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;


    }`;



    export const WrapperAnim = styled.div`

    margin-top:  400px;
    margin-left: 250px;
    position: relative;
    width: 900px;
    height: 400px;
    overflow: hidden;
    border-radius: 20px;
    animation-name: ${anim};
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    
     }`;


    

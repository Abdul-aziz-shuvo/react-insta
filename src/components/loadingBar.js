import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

const LoadingBar = ({children}) => {

    const [detectChildren,setChildren] = useState(null)
    const [load,setLoad] = useState('10%')

  useLayoutEffect(()=> {
      if(children !== undefined){
          setTimeout(() => {
              setChildren(children)
              setLoad('100%')
          },1000)
      }
  },[])
    return (
        <div  style={{
            position:'fixed',
            top: 0,
            left:0,
            height: '1%',
            width:{
                load
            },
            backgroundColor:'red'
        }}>
            {
                detectChildren !== null &&

                        children

            }

        </div>
    );
};

export default LoadingBar;
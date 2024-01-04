import React from "react";
import { useSpring, animated } from '@react-spring/web'
 

export default function ButtonStartProject() {
    const styles = useSpring({
        from: {
          opacity: 1    
        },
        to: {
          opacity: 0
        },
      })

    return (
        <animated.div style={{styles}}>
            <div>
                ASd
            </div>
        </animated.div>
    )
}
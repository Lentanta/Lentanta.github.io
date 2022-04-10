import { ReactChild } from 'react';
import { useSpring, animated } from 'react-spring'

const TabHOC = (props: { children: ReactChild }) => {
  const { children } = props;

  const styleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  })

  const normalStyle = {
    margin: "5px auto",
    borderRadius: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    maxWidth: "1024px"
  }

  return (
    <animated.div style={{ ...normalStyle, ...styleProps }}>
      <div className="tab-header">

      </div>
      {children}
    </animated.div>
  )
}

export default TabHOC;
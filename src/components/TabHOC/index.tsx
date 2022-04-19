import { ReactChild } from 'react';
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components';

const TabHOCStyled = styled(animated.div)`
  margin: 5px auto;
  padding: 15px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.7);
  max-width: 1024px;
`

const TabHOC = (props: { children: ReactChild }) => {
  const { children } = props;

  const fadeInAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  })

  return (
    <TabHOCStyled style={fadeInAnim}>
      {children}
    </TabHOCStyled>
  )
}

export default TabHOC;
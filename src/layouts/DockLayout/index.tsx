import styled from "styled-components";
import { useSpring, animated } from 'react-spring';
import { tabs } from "@constants";

import DockBtnIcon from "@components/DockBtnIcon";

const DockLayoutStyled = styled(animated.div)`
  border-radius: 8px;
  background-color: rgba(38, 50, 66, 0.8);

  display: flex;
  justify-content: space-between;
  column-gap: 5px;
`

//   < button onClick = {() => setSelectedTab(tabs.INFORMATION)}>
//     <img src="/assets/png/github-icon.png" />
// </button >

// {/* <a href="https://www.linkedin.com/in/thanh-t%C3%A2m-l%C3%AA-b95878193/" target="_blank" >
// <button>
//   <img src="/assets/png/linkedin.png" />
// </button>
// </a>

// <a href="https://www.deviantart.com/lentanta27" target="_blank" >
// <button>
//   <img src="/assets/png/deviantart.png" />
// </button>
// </a> */}

//   < button onClick = {() => setSelectedTab(tabs.OPTIONS)}>
//     <img src="/assets/png/gear-option.png" />
// </button >

type PropsType = {
  selectedTab: string;
  setSelectedTab: (option: string) => any;
}

const DockLayout = ({ selectedTab, setSelectedTab }: PropsType) => {

  const fadeInAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  })

  return (
    <DockLayoutStyled style={fadeInAnim}>
      <DockBtnIcon
        onClick={() => setSelectedTab(tabs.INFORMATION)}
        imgUrl="/assets/png/github-icon.png" />

      <DockBtnIcon
        onClick={() => setSelectedTab(tabs.OPTIONS)}
        imgUrl="/assets/png/gear-option.png" />
    </DockLayoutStyled>
  )
}
export default DockLayout;
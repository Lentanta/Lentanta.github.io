import { useSpring, animated } from 'react-spring';
import { useStore } from '@store';
import { tabs } from "@constants";

import styled from "styled-components";
import DockBtnIcon from "@components/DockBtnIcon";

type PropsType = {
  selectedTab: string;
  setSelectedTab: (option: string) => any;
}

const DockLayout = ({ selectedTab, setSelectedTab }: PropsType) => {
  const dockStyle = useStore((state: any) => state.dockStyle);
  const fadeInAnim = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  })

  return (
    <DockLayoutStyled style={fadeInAnim} $iconsGap={dockStyle.iconsGap}>
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

const DockLayoutStyled = styled(animated.div) <any>`
  border-radius: 8px;
  background-color: rgba(38, 50, 66, 0.8);

  display: flex;
  justify-content: space-between;
  column-gap: ${(props: any) => props.$iconsGap ? props.$iconsGap : 0}px;
`
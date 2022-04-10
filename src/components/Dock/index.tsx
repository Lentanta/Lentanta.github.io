
import { useContext } from 'react';
import { useSpring, animated } from 'react-spring'
import { AppContext } from '../../contexts/AppContext';

import "./style.css";

type PropsType = {
  selectedTab: string;
  setSelectedTab: (option: string) => any;
}

const Dock = (props: PropsType) => {
  const { setSelectedTab, selectedTab } = props;
  const appContext = useContext(AppContext);
  const dockStyles = appContext.dockStyles;

  const styleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
  })

  console.log(dockStyles)

  return (
    <animated.div id="dock-component" style={{ ...styleProps, ...dockStyles }}>

      <button onClick={() => setSelectedTab("github")}>
        <img src="/assets/png/github-icon.png" />
      </button>

      <a href="https://www.linkedin.com/in/thanh-t%C3%A2m-l%C3%AA-b95878193/" target="_blank" >
        <button>
          <img src="/assets/png/linkedin.png" />
        </button>
      </a>

      <a href="https://www.deviantart.com/lentanta27" target="_blank" >
        <button>
          <img src="/assets/png/deviantart.png" />
        </button>
      </a>

      <button onClick={() => setSelectedTab("options")}>
        <img src="/assets/png/gear-option.png" />
      </button>
    </animated.div>
  )
}
export default Dock;
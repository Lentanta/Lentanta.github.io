import { useStore } from "@store";
import TabHOC from '@components/TabHOC';

import { Title } from "@components/Styled/Title"

const InformationLayout = () => {
  const githubInfo = useStore((state: any) => state.githubInfo);
  
  return (
    <TabHOC>
      <div>
        <Title.H1>Hi, I'm {githubInfo.login}</Title.H1>
        <p>Curently, I'm working as a full-stack developer<br />
          My github page: <a href="https://github.com/Lentanta" target="_blank">https://github.com/Lentanta</a><br />
          LinkedIn: <a href="https://www.linkedin.com/in/thanh-t%C3%A2m-l%C3%AA-b95878193/" target="_blank">Thanh Tam</a><br />
          and Deviantart: <a href="https://www.deviantart.com/lentanta27" target="_blank">https://www.deviantart.com/lentanta27</a><br />
        </p>
      </div>
    </TabHOC>
  )
}

export default InformationLayout;
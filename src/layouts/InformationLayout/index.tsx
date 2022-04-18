import { useStore } from "@store";
import TabHOC from '@components/TabHOC';

import { Title } from "@components/Styles/Title"

const InformationLayout = () => {
  const githubInfo = useStore((state: any) => state.githubInfo);
  console.log(githubInfo);

  return (
    <TabHOC>
      <div style={{ padding: "10px", }}>
        <Title.H1>Hi, my name is Lê Thanh Tâm</Title.H1>
        <p>Curently, I'm working as a full-stack developer</p>
        <p>This is my github page: <a href="https://github.com/Lentanta" target="_blank">https://github.com/Lentanta</a></p>
      </div>
    </TabHOC>
  )
}

export default InformationLayout;
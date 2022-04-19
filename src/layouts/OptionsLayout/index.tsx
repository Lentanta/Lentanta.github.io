import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import TabHOC from '../../components/TabHOC';

const OptionsLayout = (props: any) => {
  const appContext = useContext(AppContext);
  const { setSiteOptions } = props;

  const dockStyles = appContext.dockStyles;

  const handleSet = (event: any) => {
    const newGap = parseInt(event.target.value);
    const newStyle = { ...dockStyles, columnGap: newGap };
    setSiteOptions({ ...appContext, dockStyles: newStyle })
  };

  return (
    <TabHOC>
      <form>
        {/* <button onClick={handleSet}>-</button> */}
        <p>Dock icons gap: {dockStyles.columnGap}</p>
        {/* <button onClick={handleSet1}>+</button> */}

        <input type="range" id="volume" name="volume"
          min="0" max="30"
          onChange={(e) => handleSet(e)}
          value={dockStyles.columnGap} />

        <button>Save</button>
      </form>
    </TabHOC >
  )
}

export default OptionsLayout;
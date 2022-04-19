import TabHOC from '@components/TabHOC';
import { useStore } from '@store';

const OptionsLayout = () => {
  const dockStyle = useStore((state: any) => state.dockStyle);
  const setIconsGap = useStore((state: any) => state.setIconsGap);

  return (
    <TabHOC>
      <form>
        <label>Dock icons gap: {dockStyle.iconsGap}</label><br />
        <input type="range" id="volume" name="volume" min="0" max="30"
          onChange={(e) => setIconsGap(parseInt(e.target.value))}
          value={dockStyle.iconsGap} />

      </form>
    </TabHOC >
  )
}

export default OptionsLayout;
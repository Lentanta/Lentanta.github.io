import styled from "styled-components";

const DockBtnIcon = ({ onClick, imgUrl }: { imgUrl: string, onClick: () => void }) => {
  return (
    <DockButton onClick={onClick}>
      <img src={imgUrl} />
    </DockButton>
  )
}
export default DockBtnIcon;

const DockButton = styled.button`
  border-radius: 8px;
  border: none;
  margin: 0;
  padding: 5px;
  width: auto;
  overflow: visible;

  background: transparent;
  line-height: normal;
  color: inherit;
  font: inherit;

  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  cursor: pointer;

  min-width: 60px;
  min-height: 60px;

  &:hover {
    background-color: rgba(169, 183, 202, 0.3);
  }

  &:active {
    background-color: rgba(169, 183, 202, 0.3);
  }

  img {
    border-radius: 8px;
    width: 32px;
    height: 32px;

    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Konqueror HTML */
    -khtml-user-select: none;
    /* Old versions of Firefox */
    -moz-user-select: none;
    /* Internet Explorer/Edge */
    -ms-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
  }

  @media only screen and (max-width: 768px) {
    &:hover {
      background-color: transparent;
    }
  }
`
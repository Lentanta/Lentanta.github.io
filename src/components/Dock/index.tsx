import "./style.css";

const Dock = () => {
  return (
    <div id="dock-component">

      <a href="https://github.com/Lentanta" target="_blank">
        <button onMouseOver={() => console.log("HELLO")} >
          <img src="/assets/png/github-icon.png" />
        </button>
      </a>

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
    </div>
  )
}
export default Dock;
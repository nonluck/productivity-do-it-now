import '../style/Header.scss'
import { BiRun } from 'react-icons/bi';

function Header() {
  const style = { color: "white", fontSize: "1.5em" }
  return (
    <div className="Header">
      <div className="logo">Productivity<br/>do it <span>NOW!</span><BiRun style={style}/></div>
      <div className="links">
        <a href="&">Pomodoro</a>
        <a href="&">To Do!</a>
        <a href="&">Cronograma</a>
      </div>
    </div>
  )
}

export default Header

import logo from '../../imagens/logo.svg'
import './style.css'

function Logo() {
    return(
        <div className="logo">
            <a href="/"><img 
            src={logo}
            alt=""
            className='logo-img'/>
            </a>
      </div>
    )
}

export default Logo
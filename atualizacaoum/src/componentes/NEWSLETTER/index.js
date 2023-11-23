import './style.css'


function News() {
    return( 
        <div className="news">
        <div className="news-botao"><strong>NEWSLETTER</strong></div>
        <div className="dropdown-news">
            <form>
                <input type="text" placeholder="Nome" className="dropdown-item-n" required/>
                <input type="text" placeholder="Email" className="dropdown-item-n" required/>
                <button type="submit" id="enviar-news">ENVIAR</button>
            </form>
        </div>
        </div> 
    )
}

export default News
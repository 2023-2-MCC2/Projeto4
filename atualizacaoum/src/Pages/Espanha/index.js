import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Not4 from '../../imagens/not4.svg'


function Espanha() {
    return (
        <div className="Copa">
            <Header></Header>
            <div className="conteudoCopa">
                <h2>Assédio na final da Copa do Mundo</h2>
                <p>No dia 20 de agosto aconteceu a final da Copa do Mundo Feminina, em um jogo entre Espanha e Inglaterra que resultou na vitória da equipe espanhola, conquistando pela primeira vez o título de campeã.</p>
                <div id="mapa2026">
                    <img src= {Not4} alt="Imagem da seleção feminina Espanhola"/>
                </div>
                <p>Mas esse dia especial acabou manchado por um assédio durante a comemoração do título. Na cerimônia de premiação, a atacante Jenni Hermoso foi beijada à força por Luis Rubiales, presidente da federação espanhola de futebol (RFEF). Com a imensa repercussão do caso houve uma mobilização tanto do governo espanhol quanto da FIFA. </p>
                <p className="textinho"><strong>Descartou a demissão!</strong></p>
                <p>Luis Rubiales fez um discurso no dia 25 de agosto, sobre a polêmica dizendo que foi um beijo espontâneo e consentido e que não renunciaria ao seu cargo. Rubiales ainda alegou ter perguntado a Hermoso se podia lhe dar um selinho e ela disse que sim.</p>
                <p>Essa versão logo foi desmentida pela atacante que declarou que nunca consentiu nada ao presidente.</p>
                <p>Apesar da resistência, tanto a FIFA quanto o governo espanhol começaram a organizar os trâmites para suspender Rubiales.</p>
                <p className="textinho"><strong>Não é só isso!</strong></p>
                <p>O caso sério de assédio na final da Copa do Mundo trouxe a atenção de muitos para esse assunto que não é tão incomum no esporte.</p>
                <p>Em uma sociedade machista, especialmente dentro do esporte mais popular do planeta, denúncias de assédio e abuso são comuns. Um comportamento sistêmico que atinge os diversos níveis competitivos, seja na base ou em uma Copa do Mundo. Os casos vão desde exposição excessiva para patrocinadores até técnicos de grandes times sendo afastados por denúncia.</p>
                <p>É sempre bom relembrar que assédio é crime e que medidas como esta tem que ser tomadas sempre, independente do nível do futebol ou da repercussão do caso.</p>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Espanha
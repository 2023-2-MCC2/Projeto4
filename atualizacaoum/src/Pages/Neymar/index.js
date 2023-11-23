import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Not6 from '../../imagens/not6.svg'


function Ney() {
    return (
        <div className="Copa">
            <Header></Header>
            <div className="conteudoCopa">
                <h2>Neymar está de casa nova!</h2>
                <p>O jogador brasileiro Neymar deve assinar contrato com o clube saudita Al Hilal. Esta contratação ousada promete redefinir não só a carreira esportiva do jogador, mas também o equilíbrio de poder no cenário do futebol internacional.</p>
                <div id="mapa2026">
                    <img src= {Not6} alt="Imagem do Neymar"/>
                </div>
                <p>A notícia da transferência de Neymar para o Al Hilal chocou o mundo e fez as pessoas se perguntarem sobre esta decisão inesperada. Em sua carreira, Neymar deixou uma marca nos campos brasileiros e europeus, conquistando títulos em alguns dos clubes mais prestigiados do mundo. Agora o jogador inicia uma nova aventura no cenário asiático.</p>
                <p>O Al Hilal, conhecido por suas ambições e investimentos no futebol, garantiu a assinatura de Neymar em um acordo que certamente ficará para a história do esporte. Esta mudança não só elevou o perfil dos clubes da Arábia Saudita, mas também provocou uma mudança na dinâmica tradicional do mercado de jogadores.</p>
                <p>Fãs de todo o mundo expressaram sentimentos contraditórios sobre a notícia. Alguns viram a saída de Neymar como uma oportunidade para demonstrar seu domínio em um novo ambiente, enquanto outros lamentaram a saída de seu ídolo do cenário europeu. Já o Al Hilal comemora a chegada de um talento indiscutível pronto para deixar sua marca no futebol asiático.</p>
                <p>Conforme a notícia se espalhava, aumentavam as expectativas do mundo do futebol quanto à integração de Neymar ao Al Hilal e ao futebol nacional. Esta mudança, que ultrapassa limites e desafia as expectativas existentes, certamente vai atrair torcedores aos estádios ansiosos por ver o próximo capítulo na carreira do astro do esporte.</p>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default Ney
import Footer from "../../componentes/Footer";
import Header from "../../componentes/Header";
import Not10 from '../../imagens/not10.svg'


function FIFA() {
    return (
        <div className="Copa">
            <Header></Header>
            <div className="conteudoCopa">
                <h2>The Best FIFA Football Awards</h2>
                <p>The Best FIFA Football Awards é uma cerimônia de premiação do futebol que acontece todo ano pela Federação Internacional de Futebol (FIFA). Criada em 2016, a premiação veio para substituir o ‘Melhor Jogador do Mundo pela FIFA’, o qual foi fundido com o Ballon d'Or (revista francesa) de 2009 até 2015.</p>
                <div id="mapa2026">
                    <img src= {Not10} alt="Imagem da taça do prêmio The Best FIFA"/>
                </div>
                <p>Desde de 2016, em sete premiações, a premiação já premiou duas vezes os jogadores Cristiano Ronaldo (de Portugal), Lionel Messi (da Argentina), Robert Lewandowski (da Polônia) e apenas uma vez o jogador Luka Modric (da Croácia). Segue a lista dos vencedores de cada ano: </p>
                <ul>
                    <li>2016 - Cristiano Ronaldo(POR) - disputou com Lionel Messi e Antoine Griezmann</li>
                    <li>2017 - Cristiano Ronaldo(POR) - disputou com Lionel Messi e Neymar</li>
                    <li>2018 - Luka Modric (CRO) - disputou com Cristiano Ronaldo e Mohamed Salah</li>
                    <li>2019 - Lionel Messi (ARG) - disputou com Virgil van Dijk e Cristiano Ronaldo</li>
                    <li>2020 - Robert Lewandowski (POL) - disputou com  Cristiano Ronaldo e Lionel Messi</li>
                    <li>2021 - Robert Lewandowski (POL) - disputou com  Lionel Messi e Virgil van Dijk</li>
                    <li>2022 - Lionel Messi (ARG) - disputou com Kylian Mbappé e Karim Benzema</li>
                </ul>
                <p>Considerando a junção dos prêmios de The Best FIFA, e do antigo ‘Melhor jogador do Mundo FIFA’, Messi se torna o maior ganhador, somando 7 prêmios com as duas premiações.</p>
                <ul>
                    <li>7 prêmios - Lionel Messi (ARG)</li>
                    <li>5 prêmios - Cristiano Ronaldo (POR)</li>
                    <li>3 prêmios - RONALDO (BRA) e Zinedine Zidane (FRA)</li>
                    <li>2 prêmios - RONALDINHO GAÚCHO (BRA) e Robert Lewandowski (POL)</li>
                    <li>1 prêmio - Lothar Matthäus (ALE), Marco van Basten (HOL), Roberto Baggio (ITA), ROMÁRIO (BRA), George Weah (LIB), RIVALDO (BRA), Luís Figo (POR), Fabio Cannavaro (ITA), KAKÁ (BRA) e Luka Modric (CRO)</li>
                </ul>
                <p>Já no futebol feminino, a brasileira Marta se consagra como a maior vencedora do prêmio na junção das duas premiações com 6 prêmios de melhor do mundo. Porém, quem ganhou o prêmio de The Best FIFA no último ano (2022) foi a Alexia Putellas (da Espanha).  
Segue a lista de jogadoras que ganham nos últimos anos, desde 2016:</p>
                <ul>
                    <li>2016 - Carli Lloyd (EUA) - disputou com  Marta e Melanie Behringer</li>
                    <li>2017 - Lieke Martens (HOL) - disputou com Carli Lloyd e Deyna Castellanos</li>
                    <li>2018 - MARTA (BRA) - disputou com Ada Hegerberg e Dzsenifer Marozsán</li>
                    <li>2019 - Megan Rapinoe (EUA) - disputou com Alex Morgan e Lucy Bronze</li>
                    <li>2020 - Lucy Bronze (ING) - disputou com  Pernille Harder e Wendie Renard</li>
                    <li>2021 - Alexia Putellas (ESP) - disputou com Sam Kerr e Jennifer Hermoso</li>
                    <li>2022 - Alexia Putellas (ESP) - disputou com Beth Mead e Alex Morgan</li>
                </ul>
                <p>Considerando a junção dos dois prêmios de The Best FIFA, e ‘Melhor jogadora do Mundo FIFA’, essa é a lista final de ganhadoras:</p>
                <ul>
                    <li>6 prêmios -  MARTA (BRA)</li>
                    <li>3 prêmios - Birgit Prinz (ALE)</li>
                    <li>2 prêmios - Mia Hamm (EUA),  Carli Lloyd (EUA) e  Alexia Putellas (ESP)</li>
                    <li>1 prêmio - Homare Sawa (JAP), Abby Wambach (EUA), Nadine Angerer (ALE), Nadine Kessler (ALE), Lieke Martens (HOL), Megan Rapinoe (EUA), Lucy Bronze (ING).</li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default FIFA
"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

interface ActionItem {
  label: string
  modalTitle: string
  modalMessage: string
  href: string
  modalImages: string[] // Agora é obrigatório
}

export default function AcademicWorks() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState<ActionItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsVisible(!pathname.includes("/configuracoes"))
  }, [pathname])

  if (!isVisible) return null

  const actions: ActionItem[] = [
    {
      label: "Filhos respeitem os Pais",
      modalTitle: "5 Minutos",
      modalMessage:
        `Bom, irmãos como será que podemos mostrar para os Jovens que eles só têm a ganhar ao obedecer e respeitar os Pais? Uma pergunta boa para iniciar é: será que o melhor para você é fazer tudo que tem vontade ou é ouvir e respeitar as orientações dos seus pais? Alguns exemplos de instruções que provavelmente muito dos irmãos vão se lembrar é: 

Olhe para os 2 lados antes de atravessar 

Não ponha a mão no fogão 

Não puxe o cabo da tomada 

Ou na praia, não vai muito para o fundo 

Todas essas orientações irmãos será que é para nos prejudicar? 
Certamente que não, e Jeová já sabe disso e é por isso que ele nos avisa, aqui no texto de: (Provérbios 1:8) que convido os irmãos a acompanhar. 

 

A bíblia mostra que a palavra “disciplina” vem junto com “correção”, “instrução” e “orientação”. 

Hoje em dia é comum ver os jovens falando a seguinte frase “Acho que meus pais estão sendo duros demais comigo”. 

As vezes para o Jovem a disciplina pode ser difícil de entender o porquê de tanta restrição. Só que, por falta de experiência na vida irmãos, os jovens nem sempre vão fazer a melhor escolha. Por isso, pais sensatos impõem restrições razoáveis aos filhos. 

Nossos pais irmãos já passaram por essa fase, e sabem qual as dificuldades dela e a melhor escolha a se tomar. 

Vamos ver um caso que está registrado aqui no Jovens perguntam? o caso é de STAN que foi criado por pais tementes a Deus, mas se rebelou aos 16 anos, fazendo ele mentir para seus pais. Ele explica: “Eu queria conhecer pessoas e ser aceito por elas.” e exatamente como ele queria, ele conquistou as boas graças dos amigos, que eram pessoas da pior espécie. “Eu me sentia aceito”, recorda ele. Mas as coisas logo começaram a ir mal. Ele diz: “Fui baleado, detido e agora estou condenado à prisão. E só me resta perguntar-me: ‘Valeu a pena?’ 

Será que se esse jovem tivesse seguido o conselho de seus pais que eram tementes a Deus, ele estaria nessa situação? 

É por esse motivo que na continuação de Provérbios só que agora o (versículo 1:9) que se refere a disciplina e instrução 

 

E por que dessa comparação? Nós podemos mostrar uma promessa, que vem junto com essa ordem de ser obediente, vamos ver essa promessa aqui em (Efésios 6:1-3) 

Como nos mostra o texto irmãos, honrar seu pai e mãe foi o primeiro mandamento, e com ele vem a promessa de sermos bem-sucedidos e ter uma vida longa, os pais sempre vão querer o melhor para nós. Assim então concluímos que obedecer ao pai e mãe é justo e apropriado, e traz sabedoria para nós. 

 

Então como um filho mostra que é obediente? Note que ser obediente é sinônimo de honrar pai e mãe, e no dicionário significa tratar com respeito, e no grego traz o sentido de considerar alguém de grande valor. 

Os pais são pessoas que devem ser consideradas preciosas e queridas para os filhos, o mero fato de eles terem transmitido a vida já é motivo para honrá-los, os pais são responsáveis por prover comida, roupa, abrigo, segurança e continuam a prover isso por muitos anos à frente, então não dá para calcular o valor desses cuidados amorosos e orientações providas por eles. 

 

Então ao falar com jovens nosso objetivo é, citar os 2 textos passados aqui, raciocinar com eles e mostrar que serão felizes por obedecer aos seus pais, assim seu futuro vai ser seguro e com a possibilidade de viver para sempre na terra.`,
      href: "",
      modalImages: [
      "/images/semimagem.gif"
      ]
    },

    {
      label: "Deus tem Nome!",
      modalTitle: "5 Minutos",
      modalMessage:
        `Para Jeová o nome dele é muito importante e foi por isso que ele deixou seu nome registrado na bíblia milhares de vezes. 

Mas apesar disso, hoje muitas pessoas ainda não conhecem o seu nome ou se sabem não sabem o que ele representa, e como servos de Jeová precisamos ajudar essas pessoas a conhecer esse nome, como podemos ver aqui nesse texto que convido os irmãos a acompanhar, que é o de (Romanos 10:13-14.) 

 

Como o texto deixar claro aqui, as pessoas só vão conseguir desenvolver fé em Jeová se conhecerem o seu nome, por isso precisamos continuar pregando e ensinando o nome de Jeová pois esse trabalho pode salvar vidas, e para fazer isso e ajudar as pessoas a conhecer o nome de Jeová essa matéria vai nos trazer 2 textos que podemos usar ao fazer a pregação de casa em casa... assim fazendo a pessoa desenvolver o interesse em Jeová. 

 

Talvez para iniciar a conversa com o morador nós podemos nos apresentar falando nosso nome, se estiver acompanhado falar o nome do irmão e perguntar o nome do morador e então dizer que geralmente as pessoas gostam de serem chamados pelo nome e que com deus não é diferente, e é por isso que Deus inspirou o salmista a escrever seu nome... aqui em um texto que é muito conhecido por nós que é o de (Salmos 83:18). 

 

Nesse texto destaca que Jeová é o nome mais importante que existe, é o nome do deus altíssimo aquele que criou todas as coisas. 

E quando nos referimos a Deus como “Jeová”, estamos reconhecendo Sua identidade única e pessoal, e não apelando para títulos vagos, assim também podemos mostrar ao morador o que esse Deus poderoso promete para nós no futuro. 

Uma publicação que podemos mostrar é a lição 2 da brochura “Seja Feliz Para Sempre” que tem o título “A Bíblia nos traz esperança”, dessa forma nós podemos cultivar o interesse do morador e até mesmo abrir uma revisita ou estudo bíblico, o segundo texto que essa matéria nos traz podemos ver juntos também, é o de (Jeremias 10:10 apenas a parte A) 

 

Notaram que no texto fala que o nome de Deus é Jeová, e somente ele é o deus verdadeiro. O texto também cita que ele é o deus vivente e isso significa que ele pode escutar nossas orações assim como também a do morador, fazendo com que ele se aproxime de Jeová, e então agora nós podemos mostrar mais uma lição que é a de número 8 do livro “Seja Feliz Para Sempre” onde lá vai mostrar que ele também pode ser amigo de Jeová, ajudando assim a desenvolver interesse em Jeová e em suas qualidades. 

Claro irmãos, que ainda a muitos textos que podemos usar para ajudar os outros a conhecer a Jeová e é por isso não devemos desanimar, nós precisamos continuar pregando com zelo buscando ajudar o maior número de pessoas a conhecer o nome de Jeová, ajudando-as a desenvolver fé em Jeová e assim conquistar a salvação.`,
      href: "",
      modalImages: [
      "/images/semimagem.gif"
      ]
    },

    {
      label: "Pregue as boas novas!",
      modalTitle: "5 Minutos",
      modalMessage:
      `Os irmãos sabem quantas vezes Jeová falou com Jesus enquanto ele estava aqui na terra? Há bíblia nos mostra que foi 3 vezes, a primeira quando Jesus se batizou, já a segunda vamos analisar um pouquinho melhor nesse discurso, e para começar vamos ler juntos o texto de (Mateus 17:5). 

 

 

Essa ocasião foi quando Jesus estava no alto monte com seus 3 discípulos. 

Perceberam que Jeová elogiou e disse que o amava do mesmo jeito que foi no batismo? Mas notaram o que ele acresentou desta vez? “Escutem-no”. 

E ao dizer isso ele deixou claro que devemos escutar e obedecer a seu Filho, mas escutar a voz de Jesus não é apenas ouvi-la, mas sim colocar em prática também, e para colocar em prática e realmente escutar, nós podemos fazer isso que diz aqui em (Mateus 28:19,20) 

 

 

Observem esse casal da imagem, aqui mostra que eles estão escutando Jesus, e quando nós fazemos esse serviço de pregação de casa em casa é uma forma que mostramos que estamos escutando e obedecendo essa ordem que vimos em Mateus 

É claro que nem sempre é facil pregar, afinal estamos vivendo nos ultimos dias. 

Estamos cientes que muitos de nossos irmãos estão passando por dificuldades: como perseguição, dificuldade financeira, doenças, idade avançada, proscrição assim como é o caso dos nossos irmãos na Rússia que estão até mesmo proibidos de pregar. 

E a tendência é cada vez ficar mais difícil nesse sistema, mas não devemos ficar desanimados, vamos ver um outro texto, que é de (2 Timóteo 4:2) 

 

 

 Quando Jesus esteve aqui na terra, ele relembrou seus seguidores diversas vezes a importância de continuar a ser vigilantes, e isso se aplica a nós hoje em dia. 

Quando continuamos vigilantes pregando as boas novas sem parar e sem desanimar iremos mostrar que estamos escutando Jesus. 

E qual será o resultado dessa persistência? Jesus mesmo nos responde aqui em (João 14:21) 

 

 

Viu como esse texto nos traz coragem, e ao escutar Jesus e continuarmos pregando sem desanimar, nós vamos mostrar que amamos Jesus e a Jeová, e com certeza eles vão nos ajudar a enfrentar todos os desafios que tivermos. 

Por isso irmãos nós queremos sempre continuarmos escutando a Jesus e nos manter vigilantes por continuar a pregar as boas novas sem desanimar, e se fizermos isso, com certeza vamos ser ricamente abençoados e vamos alegrar e mostrar que amamos a Jesus e a seu pai Jeová.`,
      href: "",
      modalImages: [
      "/images/semimagem.gif"
      ]
    },
    {
      label: "Devemos nos Preocupar com Mudanças?",
      modalTitle: "5 Minutos",
      modalMessage:
        `Imagine irmãos, que como muitos de nós que precisamos acordar cedo para ir trabalhar, antes mesmo do sol nascer. 

 

Levantamos, abrimos a porta e está tudo um breu única vista que temos é o pouco que as lâmpadas iluminam, mas Conforme a luz do sol vai aparecendo nós conseguimos ver com mais detalhes as ruas, as casas e as paisagens não é mesmo? 

 

Da mesma forma, Deus nos ajuda a entender as verdades da Bíblia aos poucos, no tempo escolhido por ele. 

 

Vamos ler um texto na Bíblia que vai nos ajudar a entender essa afirmação, em Provérbios 4:18 que diz assim: 

"Mas a vereda dos justos é como a brilhante luz da manhã, que clareia mais e mais até a plena luz do dia" 

 

Para nós irmãos - Testemunhas de Jeová, a Bíblia é a única autoridade para determinar nossas crenças, Então nós ajustamos nossas crenças à medida que entendemos melhor a Bíblia, ainda mais nos dias atuais que são chamados de "tempo do fim". 

 

Em Daniel 12:4 comenta que no tempo do fim "o conhecimento verdadeiro se tornará abundante" 

 

Algumas pessoas que adoravam a Deus no passado também tiveram ideias erradas e precisaram ajustar o modo como pensavam. 

 

Por exemplo lá em: 

- Atos 7:23-25 mostra que Moisés achava que estava pronto para libertar o povo de Israel. Mas como mostra nos versículos 30 e 35 do mesmo capítulo foi só 40 anos depois que Deus permitiu que isso acontecesse. 

 

- Um outro exemplo: está descrito aqui em Mateus 16:21-23 que vamos ler na íntegra: Daquele tempo em diante, Jesus começou a explicar aos seus discípulos que ele tinha de ir a Jerusalém e sofrer muitas coisas da parte dos anciãos, dos principais sacerdotes e dos escribas, e que tinha de ser morto e no terceiro dia ser levantado. Em vista disso, Pedro o levou à parte e começou a censurá-lo, dizendo: “Tenha compaixão de si mesmo, Senhor! Isso de modo algum lhe acontecerá.”Mas ele virou as costas para Pedro e lhe disse: “Para trás de mim, Satanás! Você é uma pedra de tropeço para mim, porque não tem os pensamentos de Deus, mas os de homens.” Perceberam irmãos que Conforme Pedro, os apóstolos não entendiam que o Messias teria que morrer para depois ser ressuscitado. 

 

- um último exemplo é citado ali na carta de 2 Tessalonicenses 2:1-2: que mostra que alguns cristãos do passado tinham opiniões diferentes sobre quando seria “o dia de Jeová”. 

 

Conseguiram notar irmãos que as ideias que eles tinham estavam erradas, mas Deus corrigiu a forma como eles pensavam, e hoje nós oramos para que ele continue nos corrigindo quando necessário. 

 

Por isso precisamos ter sabedoria principalmente nos dias atuais, vamos ver um último texto, que é de Tiago 1:5 que diz assim: 

"Portanto, se falta sabedoria a algum de vocês, que ele persista em pedi-la a Deus — pois ele dá a todos generosamente, sem censurar —, e ela lhe será dada" 

 

É como a Bíblia diz irmãos, ele está fazendo isso ainda mais agora, durante “o tempo do fim”, então não devemos nos surpreender nem nos incomodar com essas mudanças. 

E sim continuar a pedir sabedoria para que possamos nos adaptar nesse tempo do fim. `,
      href: "",
      modalImages: [
      "/images/semimagem.gif"
      ]
    },
    {
      label: "Casa em Casa",
      modalTitle: "5 Minutos",
      modalMessage:
        `Será que hoje em dia quando vamos pregar de casa em casa irmãos, é 100% de chance que a pessoa vai aceitar o que você está pregando? Que bom se fosse né, mas nos dias de hoje nem sempre as pessoas irão dar valor ao que você está ensinando, embora ela veja que para outros está melhorando a vida delas. Mesmo assim devemos continuar positivos, veja um excelente exemplo que Jesus Cristo nos deixou para nos encorajar: ele sempre se preocupou em levar à mensagem do reino para o máximo de pessoas que conseguir, embora fosse um ministério curto ele também sabia que alguns de início talvez não quisessem ouvir, e poderiam mudar de atitude mais tarde. 

  

É foi essa situação que aconteceu com a própria família de Jesus, ele pregou durante 3 anos e meio e nenhum de seus irmãos se tornou discípulo, ali em - (João 7:5) - fala que eles não exerciam fé nele, mas depois que ele foi ressuscitado todos eles se tornaram cristão, vamos ler o texto de (Atos 1:14), então será que esses 3 anos e meio não fizeram nenhum efeito em sua família? Fez né irmãos  

Nós não temos como saber quem vai se tornar um servo de Jeová, alguns levam mais tempo do que outros para aprender a verdade, e mesmo que de início alguns não queiram ouvir, eles podem acabar glorificando a Jeová por ver nossa conduta e atitude positiva. 

  

Um texto que reforça esse fato é o de (1 Pedro 2:12) que eu vou ler só a primeira parte, que fala assim: Mantenham uma boa conduta entre as pessoas das nações, para que, quando os acusarem de ser malfeitores, elas sejam testemunhas oculares das boas obras de vocês. 

 

Então devemos manter uma atitude positiva, para que embora alguns não aceitem podemos mostrar em ações oque ensinamos, já dizia o texto de (1 Coríntios 3:6, 7.) nós plantamos e regamos e devemos reconhecer que é Jeová quem faz crescer. Getahun, um irmão que serve na Etiópia, ele conta: “Por mais de 20 anos, eu fui a única Testemunha de Jeová num território pouco trabalhado. Mas agora somos 14 publicadores. Treze deles se batizaram, incluindo minha esposa e nossos três filhos. Em média 32 pessoas assistem às reuniões.” já pensou irmãos 20 anos pregando e mesmo assim sendo a única Testemunha de Jeová? vimos que com paciência e esperando em Jeová renderam bons frutos, não é mesmo! 

 Vamos ler um último texto que é de (João 6:44) 

Para Jeová, todas as pessoas são preciosas. E ele nos dá o privilégio de trabalhar junto com seu Filho para reunir pessoas de todas as nações, antes do fim deste sistema, nosso ministério é como um grupo de resgate, imagine que pessoas ficaram presa em uma mina, o grupo de resgate tem como prioridade entra nessa mina para salvar as pessoas que ficaram presa lá, e talvez apenas alguns consigam salvar, mas o trabalho de toda a equipe é importante. 

Sabemos que Jeová pode usar qualquer 1 de nós, mas assim como disse um irmão nosso na Bolívia chamado Andreas: "Para mim cada pessoa que se batiza é resultado de um trabalho em equipe" Então irmãos e amigos aqui presentes se tivermos esse mesmo ponto de vista positivo sobre nosso ministério, nós continuaremos uteis e a dar bons fruto para o reino de Jeová. `,
      href: "",
      modalImages: [
        ""
      ]
    },
    {
      label: "Vazio",
      modalTitle: "Esperando...",
      modalMessage:
        `...`,
      href: "",
      modalImages: [
      "/images/semimagem.gif"
      ]
    }, 
  ]

  function handleOpen(item: ActionItem) {
    setSelectedItem(item)
    setShowConfirmModal(true)
    setCurrentImageIndex(0)
  }

  function handleCancel() {
    setShowConfirmModal(false)
    setSelectedItem(null)
  }

  function handleConfirm() {
    setShowConfirmModal(false)
    setShowImageModal(true)
  }

  function handleCloseImage() {
    setShowImageModal(false)
    setSelectedItem(null)
    setCurrentImageIndex(0)
  }

  function nextImage() {
    if (!selectedItem?.modalImages) return
    setCurrentImageIndex((prevIndex) => 
      prevIndex === selectedItem.modalImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  function prevImage() {
    if (!selectedItem?.modalImages) return
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? selectedItem.modalImages.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="min-h-screen bg-stone-900 bg-cover bg-fixed">
      {/* Banner superior */}
      <div className="bg-black/70 border-b-4 border-amber-800 py-4 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-pixel text-center text-amber-400 tracking-wider">
          📜 Discursos
        </h1>
        <p className="text-center text-amber-200 mt-2 font-pixel text-sm">
          Discursos já realizados em Congregações
        </p>
      </div>

      {/* Lista de trabalhos em uma única coluna */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-8">
          {actions.map((action, idx) => (
            <div
              key={action.label + idx}
              className="relative group transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              onClick={() => handleOpen(action)}
            >
              {/* Moldura decorativa */}
              <div className="absolute inset-0 border-4 border-amber-700 rounded-lg pointer-events-none"></div>
              <div className="absolute inset-1 border-2 border-amber-500/50 rounded pointer-events-none"></div>
              
              {/* Carta de trabalho */}
              <div className="relative w-full min-h-32 rounded bg-stone-800 overflow-hidden shadow-lg p-6">
                {/* Conteúdo */}
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-pixel text-amber-200">
                      {action.label}
                    </h3>
                    <p className="text-amber-100 mt-2 text-sm line-clamp-3">
                      {action.modalMessage.substring(0, 150)}...
                    </p>
                  </div>
                  
                  {/* Rodapé */}
                  <div className="mt-4 flex justify-between items-center">
                    <div className="bg-amber-700 text-amber-100 font-pixel text-xs px-2 py-1 rounded-full">
                      {action.modalTitle.includes("5 Minutos") ? "5 Minutos" : 
                       action.modalTitle.includes("10 Minutos") ? "10 Minutos" : "Vazio"}                   
                    </div>
                    <span className="text-amber-300 text-sm font-pixel">
                      Clique para ver detalhes
                    </span>
                  </div>
                </div>
              </div>
              </div>
          ))}
        </div>
      </div>

      {/* Modal de descrição */}
      {showConfirmModal && selectedItem && (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
    <div className="bg-stone-800 border-4 border-amber-700 rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-auto shadow-xl">
      <div className="border-b border-amber-600 pb-3 mb-4">
        <h2 className="text-2xl font-pixel text-amber-300 text-center">
          {selectedItem.modalTitle}
        </h2>
        <p className="text-amber-200 text-center font-pixel mt-1">
          {selectedItem.label}
        </p>
      </div>
      
      <div className="bg-stone-700/80 border border-amber-900 p-4 rounded mb-6">
        <div className="text-amber-100 text-sm whitespace-pre-wrap">
          {selectedItem.modalMessage}
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Button 
          onClick={handleCancel}
          className="font-pixel bg-stone-700 hover:bg-stone-600 text-amber-300 border border-amber-700"
        >
          Voltar
        </Button>
        {selectedItem.modalImages.length > 0 && (
          <Button 
            onClick={handleConfirm}
            className="font-pixel bg-amber-700 hover:bg-amber-600 text-stone-100"
          >
            Ver Imagens ({selectedItem.modalImages.length})
          </Button>
        )}
      </div>
    </div>
  </div>
)}

      {/* Modal de carrossel */}
      {showImageModal && selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-stone-800 border-4 border-amber-700 rounded-lg overflow-hidden shadow-2xl max-w-5xl w-full">
            <div className="bg-stone-900 border-b border-amber-800 p-3">
              <h3 className="text-xl font-pixel text-amber-300 text-center">
                {selectedItem.label} - Imagens ({currentImageIndex + 1}/{selectedItem.modalImages.length})
              </h3>
            </div>
            
            <div className="relative p-4 bg-black flex justify-center items-center max-h-[70vh] overflow-auto">
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-stone-800/80 hover:bg-stone-700/90 text-amber-300 p-2 rounded-full z-10"
              >
                &lt;
              </button>
              
              <img 
                src={selectedItem.modalImages[currentImageIndex]} 
                alt={`${selectedItem.label} - Imagem ${currentImageIndex + 1}`}
                className="max-w-full max-h-[65vh] object-contain"
              />
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-stone-800/80 hover:bg-stone-700/90 text-amber-300 p-2 rounded-full z-10"
              >
                &gt;
              </button>
            </div>
            
            <div className="bg-stone-900 border-t border-amber-800 p-3 flex justify-center space-x-2">
              {selectedItem.modalImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-amber-500' : 'bg-stone-600'}`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="bg-stone-900 border-t border-amber-800 p-3 flex justify-center">
              <Button 
                onClick={handleCloseImage}
                className="font-pixel bg-amber-700 hover:bg-amber-600 text-stone-100"
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
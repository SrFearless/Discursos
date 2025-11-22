"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface ActionItem {
  label: string;
  modalTitle: string;
  modalMessage: string;
  href: string;
  modalImages: string[];
}

export default function AcademicWorks() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ActionItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // estados para inputs editáveis encontrados no texto
  const [editableFields, setEditableFields] = useState<{ [k: string]: string }>({});

  useEffect(() => {
    setIsVisible(!pathname.includes("/configuracoes"));
  }, [pathname]);

  if (!isVisible) return null;

  const actions: ActionItem[] = [
    {
        label: "Fim de Semana",
        modalTitle: "Ilimitado",
        modalMessage:
          `Convido os irmãos a se sentarem que dentro de 1 minuto começaremos a reunião. 

_____________________________ 


Sejam todos bem-vindos a mais uma reunião de fim de semana das testemunhas de jeová, e gostaria de pedir para colocarem seus dispositivos eletrônicos no modo “silencioso” ou no “não perturbe” 

É sempre um prazer e uma alegria ter todos aqui reunidos para nos encorajarmos e aproveitar as provisões que o nosso bom Deus nos dá. 

Hoje teremos um discurso público e o estudo da revista “A Sentinela”. 

E para começarmos eu convido os irmãos que poderem se levantar, para entoarmos um cântico de louvor a Jeová. 

Que é o de: 

Número: (28)

Tema: (Quem pode ser amigo de Jeová?)

Baseado no Texto: (Salmo 15)

Após a melodia todos cantemos. 

_____________________________ 


Muito bem, agora teremos um discurso público com o seguinte tema se desejarem anotar: 

Tema: (Você conhece bem a Deus?)

Orador: (Cleber Sales Vieira)

Congregação: (Jardim Suzuki)

No qual passamos a Tribuna. 

_____________________________ 

Vimos: (Que precisamos conhecer a fundo as ações e as qualidades de Jeová, e agir de acordo com esse conhecimento.)

Primeiramente gostaríamos de agradecer a Jeová por essa provisão amorosa e ao nosso irmão

Orador:(Cleber Sales Vieira)

que treinou, se esforçou e se deslocou de sua congregação juntamente com sua famili para nos proporcionar esse excelente discurso.
 
E Fica um convite também para a próxima reunião de fim de semana que vai ter outro discurso, com outras instruções para nós. 

Agora irmãos nós iremos passar para o Estudo da “A Sentinela” no qual nosso irmão (Isaias) vai dirigir essa parte.`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
  ]
  const actions1: ActionItem[] = [
      {
        label: "Apresentação sobre as Guerras",
        modalTitle: "7 Minutos",
        modalMessage:
          `
Bom dia a todos, parabens aos irmãos por apoiar a saída de campo. 

Hoje para a nossa consideração, eu quero dar uma sugestão encima desse folheto com o tema: Quem Controla o Mundo? 

Porque na atual situação do mundo está acontecendo muitas guerras, tivemos o episódio da Rússia e Ucrânia agora Israel e irã, e nós também vemos que muitas casas foram afetadas, pessoas acabaram perdendo a vida e muitas pessoas pode acabar se perguntando do porquê “Deus deixa tudo isso acontecer?” 

Vamos ver um Texto que nós podemos apresentar ao morador? Que está logo abrindo o folheto: 1 João 5:19 quem pode ajudar na leitura? 

(Sabemos que nos originamos de Deus, mas o mundo inteiro está no poder do Maligno.)

Como podemos aplicar esses texto conversando com o Morador?

Nós podemos pensar, será que se Deus estivesse governando o mundo ele estaria nessa situação? afinal sabemos que Jeová é um Deus de amor`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
      {
        label: "Apresentação sobre Ficar Pacífico",
        modalTitle: "7 Minutos",
        modalMessage:
          `Bom dia a todos, parabens aos irmãos por apoiar a saída de campo. 

Hoje para a nossa consideração eu quero começar lendo um texto, que é o de Romanos 12:17-20 Quem poderia nos ajudar com a Leitura?

17 - Não retribuam a ninguém mal com mal. Preocupem-se com o que é bom aos olhos de todas as pessoas. 18 - Se possível, no que depender de vocês, sejam pacíficos com todos. 19 - Não se vinguem, amados, mas deem lugar à ira; pois está escrito: “A vingança é minha; eu retribuirei, diz Jeová.” 20 - Mas, “se o seu inimigo estiver com fome, dê-lhe algo para comer; se ele estiver com sede, dê-lhe algo para beber; pois, fazendo isso, você amontoará brasas vivas sobre a cabeça dele”

Como podemos aplicar esses textos conversando com o Morador?

Podemos pensar como o exemplo de um ferreiro que precisa colocar o ferro em brasas ardentes para amolecer ele.

E quando nós respondemos a Ira com Paz essa pessoa vai ficar pensando sobre isso, e como vemos ali no paragrafo 20 "amontoará brasas vivas sobre a cabeça dele"`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
      {
        label: "Apresentação de como Responder aos desastres",
        modalTitle: "7 Minutos",
        modalMessage:
          `Bom dia a todos, parabens aos irmãos por apoiar a saída de campo. 

Hoje para nossa consideração eu gostaria de abordar um tema que está causando preocupações aos moradores, que é sobre desastres naturais... como tivemos a recente catastrofe do Rio bonito do Iguaçu onde 90% da cidade foi destruida ou danificada. 

E muitas pessoas principalmente lá onde foram afetados podem acabar se perguntando:

Porque estou passando por essa situação?

Ou se é uma punição divina? como muitos ainda acreditam que Deus provoca desastres para punir os maus, as vezes até apontando relatos biblicos como o (DILUVIO).

Mas vamos ver um texto que ajuda na resposta para o Morador? (Leia 1 João 4:8)

8 - Quem não ama não conhece a Deus, porque Deus é amor.

Como podemos aplicar esses textos conversando com o Morador?

Isso mesmo, muitos acham que Deus controla o mundo, e pode surgir a pergunta: se não é Deus quem governa, quem governa?

Ai podemos entregar o folheto que faz essa mesma pergunta. (Quem realmente controla o Mundo?) ai podemos ler o texto de (1 João 5:19) onde vai dar uma resposta para ele

Muito bem irmãos, essa era a consideração para o dia de hoje`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
  ]
  const actions2: ActionItem[] = [
    {
        label: "Jóias Espirituais",
        modalTitle: "10 Minutos",
        modalMessage:
        `Bom, Então irmãos para começar as Jóias quem pode nos ajudar a ler o texto de

        Texto da Semana:(Eclesiastes 10 12-14)

        Obrigado pela leitura, agora vamos a pergunta relacionada a esse texto

        Pergunta da Semana:(De acordo com esses versículos, por que a tagarelice é perigosa?)

        Isso mesmo, a segunda pergunta é (Que joias espirituais você encontrou na leitura da Bíblia desta Semana?)

        (Comentários)

        Obrigado pelos excelentes comentários, agora prosseguimos a reunião com o Presidente
`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
  ]
  const actions3: ActionItem[] = [
    {
        label: "Vazio",
        modalTitle: "15 Minutos",
        modalMessage:
          `...`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
  ]

  // abre o modal e extrai campos editáveis do texto
  function handleOpen(item: ActionItem) {
    setSelectedItem(item);
    setShowConfirmModal(true);
    setCurrentImageIndex(0);

    // encontra todas as ocorrências nos dois formatos:
    // 1) (Campo: Valor)
    // 2) Campo: (Valor)
    const matches = findFieldMatches(item.modalMessage);

    const fields: { [k: string]: string } = {};
    matches.forEach((m) => {
      // se existir o mesmo campo múltiplas vezes, usa última ocorrência (ou m.label + index seria alternativa)
      fields[m.label.trim()] = m.value ?? "";
    });

    setEditableFields(fields);
    console.log("Campos detectados:", fields);
  }

  function handleCancel() {
    setShowConfirmModal(false);
    setSelectedItem(null);
    setEditableFields({});
  }

  function handleConfirm() {
    setShowConfirmModal(false);
    setShowImageModal(true);
  }

  function handleCloseImage() {
    setShowImageModal(false);
    setSelectedItem(null);
    setCurrentImageIndex(0);
  }

  function nextImage() {
    if (!selectedItem?.modalImages) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedItem.modalImages.length - 1 ? 0 : prevIndex + 1
    );
  }

  function prevImage() {
    if (!selectedItem?.modalImages) return;
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedItem.modalImages.length - 1 : prevIndex - 1
    );
  }

  // --- Funções utilitárias para detectar e renderizar campos editáveis ---

  type Match = { start: number; end: number; label: string; value: string };

  function findFieldMatches(text: string): Match[] {
    const out: Match[] = [];

    // regex para (Campo: Valor)
    const rxParenLabel = /\(([^\(\):]+?)\s*:\s*([^)]+?)\)/g;
    let m;
    while ((m = rxParenLabel.exec(text)) !== null) {
      out.push({
        start: m.index,
        end: rxParenLabel.lastIndex,
        label: m[1].trim(),
        value: m[2].trim(),
      });
    }

    // regex para Campo: (Valor)  (captura label antes dos parênteses)
    const rxLabelParen = /([^\n()]{1,80}?)\s*:\s*\(([^)]+?)\)/g;
    while ((m = rxLabelParen.exec(text)) !== null) {
      out.push({
        start: m.index,
        end: rxLabelParen.lastIndex,
        label: m[1].trim(),
        value: m[2].trim(),
      });
    }

    // ordenar por posição no texto
    out.sort((a, b) => a.start - b.start);
    return out;
  }

  function renderEditableMessage(message: string) {
    // encontra todas as ocorrências
    const matches = findFieldMatches(message);
    if (matches.length === 0) {
      // sem matches => mostrar o texto raw com quebras preservadas
      return <div className="whitespace-pre-wrap">{message}</div>;
    }

    const parts: any[] = [];
    let lastIndex = 0;
    matches.forEach((match, idx) => {
      // texto antes do match
      if (match.start > lastIndex) {
        parts.push(
          <span key={`text-before-${idx}`} className="whitespace-pre-wrap">
            {message.slice(lastIndex, match.start)}
          </span>
        );
      }

      const fieldKey = match.label;
      const value = editableFields[fieldKey] ?? match.value ?? "";

      // bloco com label + input
      parts.push(
        <div
          key={`input-${idx}-${fieldKey}`}
          className="flex flex-col md:flex-row md:items-center md:space-x-4 my-2 bg-stone-700 p-2 rounded border border-amber-800"
        >
          <label className="text-amber-400 font-pixel text-sm md:w-48">{fieldKey}:</label>
          <input
            type="text"
            value={value}
            onChange={(e) =>
              setEditableFields((prev) => ({ ...prev, [fieldKey]: e.target.value }))
            }
            className="flex-1 bg-stone-900 border border-amber-700 text-amber-100 px-2 py-1 rounded font-pixel text-sm"
          />
        </div>
      );

      lastIndex = match.end;
    });

    // resto do texto após último match
    if (lastIndex < message.length) {
      parts.push(
        <span key="text-after" className="whitespace-pre-wrap">
          {message.slice(lastIndex)}
        </span>
      );
    }

    return <>{parts}</>;
  }

  // --- RENDER principal ---
  return (
    <div className="min-h-screen bg-stone-900 bg-cover bg-fixed">
      {/* Banner superior */}
      <div className="bg-black/70 border-b-4 border-amber-800 py-4 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-pixel text-center text-amber-400 tracking-wider">
          📜 Designações
        </h1>
        <p className="text-center text-amber-200 mt-2 font-pixel text-sm">
          Partes como Saída de Campo, Tesouros da Palavra de Deus, Faça seu Melhor no Ministério e
          Nossa Vida Cristã
        </p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="px-4 py-12 font-pixel text-purple-500 border-l-2 border-amber-500 text-[25px]">
          Presidencia
        </div>

        <div className="space-y-8">
          {actions.map((action, idx) => (
            <div
              key={action.label + idx}
              className="relative group transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              onClick={() => handleOpen(action)}
            >
              <div className="absolute inset-0 border-4 border-amber-700 rounded-lg pointer-events-none" />
              <div className="absolute inset-1 border-2 border-amber-500/50 rounded pointer-events-none" />

              <div className="relative w-full min-h-32 rounded bg-stone-800 overflow-hidden shadow-lg p-6">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-pixel text-amber-200">{action.label}</h3>
                    <p className="text-amber-100 mt-2 text-sm line-clamp-3">
                      {action.modalMessage.substring(0, 150)}...
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="bg-amber-700 text-amber-100 font-pixel text-xs px-2 py-1 rounded-full">
                      {action.modalTitle.includes("Ilimitado")
                        ? "Ilimitado"
                        : action.modalTitle.includes("7 Minutos")
                        ? "7 Minutos"
                        : action.modalTitle.includes("10 Minutos")
                        ? "10 Minutos"
                        : action.modalTitle.includes("15 Minutos")
                        ? "15 Minutos"
                        : action.modalTitle.includes("30 Minutos")
                        ? "30 Minutos"
                        : "Vazio"}
                    </div>
                    <span className="text-amber-300 text-sm font-pixel">Clique para ver detalhes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-12 font-pixel text-purple-500 border-l-2 border-amber-500 text-[25px]">
        Saida de Campo
        </div>
        <div className="space-y-8">
          {actions1.map((action, idx) => (
            <div
              key={action.label + idx}
              className="relative group transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              onClick={() => handleOpen(action)}
            >
              <div className="absolute inset-0 border-4 border-amber-700 rounded-lg pointer-events-none" />
              <div className="absolute inset-1 border-2 border-amber-500/50 rounded pointer-events-none" />

              <div className="relative w-full min-h-32 rounded bg-stone-800 overflow-hidden shadow-lg p-6">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-pixel text-amber-200">{action.label}</h3>
                    <p className="text-amber-100 mt-2 text-sm line-clamp-3">
                      {action.modalMessage.substring(0, 150)}...
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="bg-amber-700 text-amber-100 font-pixel text-xs px-2 py-1 rounded-full">
                      {action.modalTitle.includes("Ilimitado")
                        ? "Ilimitado"
                        : action.modalTitle.includes("7 Minutos")
                        ? "7 Minutos"
                        : action.modalTitle.includes("10 Minutos")
                        ? "10 Minutos"
                        : action.modalTitle.includes("15 Minutos")
                        ? "15 Minutos"
                        : action.modalTitle.includes("30 Minutos")
                        ? "30 Minutos"
                        : "Vazio"}
                    </div>
                    <span className="text-amber-300 text-sm font-pixel">Clique para ver detalhes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-12 font-pixel text-purple-500 border-l-2 border-amber-500 text-[25px]">
        Jóias
        </div>
        <div className="space-y-8">
          {actions2.map((action, idx) => (
            <div
              key={action.label + idx}
              className="relative group transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              onClick={() => handleOpen(action)}
            >
              <div className="absolute inset-0 border-4 border-amber-700 rounded-lg pointer-events-none" />
              <div className="absolute inset-1 border-2 border-amber-500/50 rounded pointer-events-none" />

              <div className="relative w-full min-h-32 rounded bg-stone-800 overflow-hidden shadow-lg p-6">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-pixel text-amber-200">{action.label}</h3>
                    <p className="text-amber-100 mt-2 text-sm line-clamp-3">
                      {action.modalMessage.substring(0, 150)}...
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="bg-amber-700 text-amber-100 font-pixel text-xs px-2 py-1 rounded-full">
                      {action.modalTitle.includes("Ilimitado")
                        ? "Ilimitado"
                        : action.modalTitle.includes("7 Minutos")
                        ? "7 Minutos"
                        : action.modalTitle.includes("10 Minutos")
                        ? "10 Minutos"
                        : action.modalTitle.includes("15 Minutos")
                        ? "15 Minutos"
                        : action.modalTitle.includes("30 Minutos")
                        ? "30 Minutos"
                        : "Vazio"}
                    </div>
                    <span className="text-amber-300 text-sm font-pixel">Clique para ver detalhes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-12 font-pixel text-purple-500 border-l-2 border-amber-500 text-[25px]">
        Necessidades Locais
        </div>
        <div className="space-y-8">
          {actions3.map((action, idx) => (
            <div
              key={action.label + idx}
              className="relative group transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
              onClick={() => handleOpen(action)}
            >
              <div className="absolute inset-0 border-4 border-amber-700 rounded-lg pointer-events-none" />
              <div className="absolute inset-1 border-2 border-amber-500/50 rounded pointer-events-none" />

              <div className="relative w-full min-h-32 rounded bg-stone-800 overflow-hidden shadow-lg p-6">
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-pixel text-amber-200">{action.label}</h3>
                    <p className="text-amber-100 mt-2 text-sm line-clamp-3">
                      {action.modalMessage.substring(0, 150)}...
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="bg-amber-700 text-amber-100 font-pixel text-xs px-2 py-1 rounded-full">
                      {action.modalTitle.includes("Ilimitado")
                        ? "Ilimitado"
                        : action.modalTitle.includes("7 Minutos")
                        ? "7 Minutos"
                        : action.modalTitle.includes("10 Minutos")
                        ? "10 Minutos"
                        : action.modalTitle.includes("15 Minutos")
                        ? "15 Minutos"
                        : action.modalTitle.includes("30 Minutos")
                        ? "30 Minutos"
                        : "Vazio"}
                    </div>
                    <span className="text-amber-300 text-sm font-pixel">Clique para ver detalhes</span>
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
              <h2 className="text-2xl font-pixel text-amber-300 text-center">{selectedItem.modalTitle}</h2>
              <p className="text-amber-200 text-center font-pixel mt-1">{selectedItem.label}</p>
            </div>

            <div className="bg-stone-700/80 border border-amber-900 p-4 rounded mb-6">
              <div className="text-amber-100 text-sm">
                {renderEditableMessage(selectedItem.modalMessage)}
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
                <Button onClick={handleConfirm} className="font-pixel bg-amber-700 hover:bg-amber-600 text-stone-100">
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
                  className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-amber-500" : "bg-stone-600"}`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>

            <div className="bg-stone-900 border-t border-amber-800 p-3 flex justify-center">
              <Button onClick={handleCloseImage} className="font-pixel bg-amber-700 hover:bg-amber-600 text-stone-100">
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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
      label: "Salmos 83:18",
      modalTitle: "Ilimitado",
      modalMessage:
        `18- Que as pessoas saibam que tu, cujo nome é Jeová, Somente tu és o Altíssimo sobre toda a terra.`,
      href: "",
      modalImages: [
        "/images/semimagem.gif"
      ]
    },
  ]
  const actions1: ActionItem[] = [
      {
        label: "Gênesis 9:4",
        modalTitle: "Ilimitado",
        modalMessage:
          `
          4- Somente não comam a carne de um animal com seu sangue, que é a sua vida.`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
      {
        label: "Deuteronômio 12:23",
        modalTitle: "Ilimitado",
        modalMessage:
          `
          23- Apenas esteja firmemente decidido a não comer o sangue,a porque o sangue é a vida; não coma a vida junto com a carne.`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
      {
        label: "Levítico 17:10",
        modalTitle: "Ilimitado",
        modalMessage:
          `
          10- “Se algum homem da casa de Israel ou algum estrangeiro que mora entre vocês comer o sanguea de qualquer criatura, eu certamente me voltarei contra aquele que comer o sangue, e o eliminarei dentre seu povo."`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
      {
        label: "Levítico 17:14",
        modalTitle: "Ilimitado",
        modalMessage:
          `
          14- Pois a vida de todo tipo de criatura é seu sangue, porque a vida está no sangue. Por isso eu disse aos israelitas: “Não comam o sangue de nenhuma criatura, porque a vida de todas as criaturas é seu sangue. Quem o comer será eliminado.”`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
      {
        label: "Atos 15:28, 29",
        modalTitle: "Ilimitado",
        modalMessage:
          `
          28- Pois pareceu bem ao espírito santo e a nós não impor a vocês nenhum fardo além destas coisas necessárias: 
          29- que persistam em se abster de coisas sacrificadas a ídolos, de sangue, do que foi estrangulado e de imoralidade sexual. Se vocês se guardarem cuidadosamente dessas coisas, tudo irá bem com vocês. Saudações!”`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
  ]
  const actions2: ActionItem[] = [
    {
      label: "Deuteronômio 18:14",
      modalTitle: "Ilimitado",
      modalMessage:
        `
        14- “Pois estas nações que você vai expulsar escutam os que praticam magia e adivinhação, mas Jeová, seu Deus, não lhe permitiu fazer nada disso.`,
      href: "",
      modalImages: [
        "/images/semimagem.gif"
      ]
    },
    {
      label: "Gálatas 5:19-21",
      modalTitle: "Ilimitado",
      modalMessage:
        `
        19- As obras da carne são claramente vistas. Elas são: imoralidade sexual, impureza, conduta insolente,
        20- idolatria, ocultismo, inimizades, brigas, ciúme, acessos de ira, discórdias, divisões, formação de seitas,
        21- inveja, embriaguez, festas descontroladas e coisas como essas. Eu estou advertindo vocês a respeito dessas coisas, do mesmo modo como já os adverti: os que praticam tais coisas não herdarão o Reino de Deus.`,
      href: "",
      modalImages: [
        "/images/semimagem.gif"
      ]
    },
    {
      label: "Eclesiastes 7:1",
      modalTitle: "Ilimitado",
      modalMessage:
        `
        7- Um bom nome é melhor do que um bom óleo, e o dia da morte é melhor do que o dia do nascimento.`,
      href: "",
      modalImages: [
        "/images/semimagem.gif"
      ]
    },
  ]
  const actions3: ActionItem[] = [
    {
        label: "Colossenses 3:17, 22-25",
        modalTitle: "Ilimitado",
        modalMessage:
          `
          17- O que for que fizerem, em palavras ou em ações, façam tudo em nome do Senhor Jesus, agradecendo a Deus, o Pai, por meio dele. 
          22- Escravos, em tudo sejam obedientes aos seus senhores humanos, não apenas quando estiverem sendo observados, só para agradar a homens, mas com sinceridade de coração, com temor a Jeová. 
          23- O que for que fizerem, trabalhem nisso de toda a alma, como para Jeová, e não para homens, 
          24- pois vocês sabem que é de Jeová que receberão a herança como recompensa. Trabalhem como escravos para o Senhor, Cristo. 
          25- Certamente, quem faz o que é errado terá a retribuição pelo que fez de errado, e não há parcialidade.`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
  ]
  const actions4: ActionItem[] = [
    {
        label: "Eclesiastes 11:9-10",
        modalTitle: "Ilimitado",
        modalMessage:
          `
          9- Alegre-se, jovem, enquanto você ainda é jovem, e que o seu coração seja feliz nos dias da sua juventude. Siga os caminhos do seu coração e vá para onde seus olhos o levarem; mas saiba que o verdadeiro Deus o levará a julgamento por todas essas coisas.
          10- Portanto, tire do seu coração as preocupações e afaste do seu corpo coisas prejudiciais, pois a juventude e a flor da vida são vaidade.
`,
        href: "",
        modalImages: [
          "/images/semimagem.gif"
        ]
      },
      {
        label: "Provérbios 19:14",
        modalTitle: "Ilimitado",
        modalMessage:
          `
          14- Casa e riquezas são herdadas dos pais, Mas a esposa prudente vem de Jeová.`,
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
          📜 Textos Biblicos
        </h1>
        <p className="text-center text-amber-200 mt-2 font-pixel text-sm">
          Se esqueceu de algum texto na hora de Explicar a sua crença? Então ache-o aqui
        </p>
      </div>

      {/* Lista de trabalhos em uma única coluna */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="px-4 py-12 font-pixel text-purple-500 border-l-2 border-amber-500 text-[25px]">
            Qual o nome de Jeová?
        </div>
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
                      {action.modalTitle.includes("Ilimitado") ? "Ilimitado" :
                       action.modalTitle.includes("7 Minutos") ? "7 Minutos" :
                       action.modalTitle.includes("10 Minutos") ? "10 Minutos" :
                       action.modalTitle.includes("15 Minutos") ? "15 Minutos" :
                       action.modalTitle.includes("30 Minutos") ? "30 Minutos" : "Vazio"}                   
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
        <div className="px-4 py-12 font-pixel text-purple-500 border-l-2 border-amber-500 text-[25px]">
            Porquê não aceitamos Sangue?
        </div>
        <div className="space-y-8">
          {actions1.map((action, idx) => (
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
                    {action.modalTitle.includes("Ilimitado") ? "Ilimitado" :
                       action.modalTitle.includes("7 Minutos") ? "7 Minutos" :
                       action.modalTitle.includes("10 Minutos") ? "10 Minutos" :
                       action.modalTitle.includes("15 Minutos") ? "15 Minutos" :
                       action.modalTitle.includes("30 Minutos") ? "30 Minutos" : "Vazio"}                    
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
        <div className="px-4 py-12 font-pixel text-purple-500 border-l-2 border-amber-500 text-[25px]">
            Aniversário
        </div>
        <div className="space-y-8">
          {actions2.map((action, idx) => (
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
                    {action.modalTitle.includes("Ilimitado") ? "Ilimitado" :
                       action.modalTitle.includes("7 Minutos") ? "7 Minutos" :
                       action.modalTitle.includes("10 Minutos") ? "10 Minutos" :
                       action.modalTitle.includes("15 Minutos") ? "15 Minutos" :
                       action.modalTitle.includes("30 Minutos") ? "30 Minutos" : "Vazio"}                   
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
        <div className="px-4 py-12 font-pixel text-purple-500 border-l-2 border-amber-500 text-[25px]">
            Dê o seu Melhor
        </div>
        <div className="space-y-8">
          {actions3.map((action, idx) => (
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
                    {action.modalTitle.includes("Ilimitado") ? "Ilimitado" :
                       action.modalTitle.includes("7 Minutos") ? "7 Minutos" :
                       action.modalTitle.includes("10 Minutos") ? "10 Minutos" :
                       action.modalTitle.includes("15 Minutos") ? "15 Minutos" :
                       action.modalTitle.includes("30 Minutos") ? "30 Minutos" : "Vazio"}                    
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
        <div className="px-4 py-12 font-pixel text-purple-500 border-l-2 border-amber-500 text-[25px]">
            Espere por uma Esposa
        </div>
        <div className="space-y-8">
          {actions4.map((action, idx) => (
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
                    {action.modalTitle.includes("Ilimitado") ? "Ilimitado" :
                       action.modalTitle.includes("7 Minutos") ? "7 Minutos" :
                       action.modalTitle.includes("10 Minutos") ? "10 Minutos" :
                       action.modalTitle.includes("15 Minutos") ? "15 Minutos" :
                       action.modalTitle.includes("30 Minutos") ? "30 Minutos" : "Vazio"}                    
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
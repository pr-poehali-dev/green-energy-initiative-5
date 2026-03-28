import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Какой септик подойдёт для моего дома?",
    answer:
      "Это зависит от количества жильцов, объёма потребления воды, типа грунта и уровня грунтовых вод на участке. Мы приезжаем, смотрим участок и рекомендуем оптимальное решение — бесплатно. Чаще всего для семьи из 4 человек достаточно септика объёмом 3–4 куб. м.",
  },
  {
    question: "Сколько стоит установка канализации?",
    answer:
      "Стоимость зависит от типа системы, объёма земляных работ и удалённости объекта. Септик с монтажом стартует от 80 000 ₽, биостанция — от 120 000 ₽. Точную цену скажем после выезда на участок — скрытых доплат нет.",
  },
  {
    question: "Как долго длится установка?",
    answer:
      "Монтаж стандартного септика занимает 1–2 дня. Биостанция с полем фильтрации — 2–4 дня. Всё включено: земляные работы, установка, подключение, засыпка и запуск системы.",
  },
  {
    question: "Нужно ли обслуживать септик?",
    answer:
      "Да. Стандартный септик откачивается раз в 1–2 года. Биостанция требует проверки раз в полгода. Мы предлагаем договор на обслуживание — приезжаем сами, вы просто пользуетесь водой.",
  },
  {
    question: "Работаете ли вы зимой?",
    answer:
      "Да, монтаж ведём круглый год. Зимой земляные работы обходятся дороже, но система устанавливается без проблем. Современные септики и биостанции работают при морозах до −25°C.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Позвоните или оставьте заявку на сайте. Мы перезвоним, уточним детали и договоримся о бесплатном выезде на участок. После осмотра — готовое коммерческое предложение в тот же день.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Icon from '@/components/ui/icon';

export default function HowItWorksSection() {
  const steps = [
    {
      step: '1',
      title: 'Заявка',
      description: 'Вы оставляете заявку через форму',
      icon: 'FileText'
    },
    {
      step: '2',
      title: 'Материалы',
      description: 'Присылаете фото и видео близкого',
      icon: 'Upload'
    },
    {
      step: '3',
      title: 'Создание',
      description: 'Мы создаём персональную страницу памяти',
      icon: 'Palette'
    },
    {
      step: '4',
      title: 'Изготовление',
      description: 'Изготавливаем QR-код на табличке',
      icon: 'QrCode'
    },
    {
      step: '5',
      title: 'Установка',
      description: 'Устанавливаем на памятник',
      icon: 'CheckCircle'
    }
  ];

  return (
    <section className="py-20 px-4 bg-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground">
            Как это работает
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            Простой процесс из 5 шагов — и память о близком человеке станет живой
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="relative">
                <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl">
                  {item.step}
                </div>
                <div className="mt-4 mx-auto w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm font-body text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg font-body text-muted-foreground italic">
            Теперь вы и ваши близкие сможете вспомнить дорогого человека в любой момент
          </p>
        </div>
      </div>
    </section>
  );
}
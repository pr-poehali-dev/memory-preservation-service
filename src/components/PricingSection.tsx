import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function PricingSection() {
  const plans = [
    {
      name: 'Базовый',
      price: '5 000 ₽',
      features: [
        'QR-код на табличке',
        '1 видео до 5 минут',
        'Базовая страница памяти',
        'Хранение 1 год'
      ],
      popular: false
    },
    {
      name: 'Стандарт',
      price: '12 000 ₽',
      features: [
        'QR-код на качественной табличке',
        'Несколько фото и видео',
        'Страница с биографией',
        'Галерея воспоминаний',
        'Хранение 3 года'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: '25 000 ₽',
      features: [
        'Дизайнерская табличка',
        'Монтаж видеоролика',
        'Расширенная биография',
        'Музыкальное сопровождение',
        'Пожизненное хранение'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground">
            Тарифы
          </h2>
          <p className="text-xl font-body text-muted-foreground">
            Выберите подходящий план для сохранения памяти
          </p>
          <div className="max-w-md mx-auto mb-8">
            <img 
              src="/img/cd24068e-e104-4a3b-b21c-6e269a936132.jpg" 
              alt="Качественная QR-табличка на памятнике"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-heading font-semibold">
                    Популярный
                  </span>
                </div>
              )}
              <CardContent className="p-8">
                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-2xl font-heading font-bold text-foreground">{plan.name}</h3>
                  <div className="text-4xl font-heading font-bold text-primary">{plan.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-body">
                      <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full font-heading font-semibold"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
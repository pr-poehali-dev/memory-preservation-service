import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Спасибо! Мы свяжемся с вами в течение дня.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-accent/20 to-accent/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                  Сохраните память о близком{' '}
                  <span className="text-primary">навсегда</span>
                </h1>
                <p className="text-xl font-body text-muted-foreground leading-relaxed">
                  QR-код на памятнике оживит фото — и вы снова сможете услышать голос, 
                  увидеть улыбку и вспомнить счастливые моменты
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 font-heading font-semibold"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Получить бесплатный макет
                  <Icon name="ArrowRight" size={20} />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 font-heading"
                >
                  <Icon name="Play" size={20} />
                  Посмотреть демо
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-card rounded-2xl p-8 shadow-xl">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-64 h-48 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="/img/96edb288-94c8-4d96-b12f-bcbfb4cb3011.jpg" 
                      alt="Памятник с QR-кодом и телефон с видео"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-body text-muted-foreground">
                    Наведите камеру телефона на QR-код
                  </p>
                  <div className="bg-accent/30 rounded-lg p-4">
                    <Icon name="Smartphone" size={32} className="mx-auto text-primary mb-2" />
                    <p className="text-xs font-body">Видео и фото откроются автоматически</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Фото хранит образ, но не передаёт{' '}
                <span className="text-primary">живые эмоции</span>
              </h2>
              <p className="text-xl font-body text-muted-foreground leading-relaxed">
                Мы предлагаем решение: QR-код с персональной страницей памяти. 
                Достаточно навести камеру — и оживёт воспоминание, полное тепла и любви.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/e94ae7bb-2b47-409d-acae-0d51c2bb09c3.jpg" 
                  alt="Мирный мемориальный сад"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Image" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold">Было</h3>
              <p className="text-muted-foreground font-body">Только статичное фото на памятнике</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <Icon name="ArrowRight" size={32} className="text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-semibold">Стало</h3>
              <p className="text-muted-foreground font-body">QR-код открывает богатую страницу памяти</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold">Результат</h3>
              <p className="text-muted-foreground font-body">Живые воспоминания в любой момент</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
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
            {[
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
            ].map((item, index) => (
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

      {/* Pricing */}
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
            {[
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
            ].map((plan, index) => (
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

      {/* Emotional Block */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-heading font-bold text-foreground">
                Мы помним близких{' '}
                <span className="text-primary">живыми</span>
              </h2>
              <p className="text-xl font-body text-muted-foreground leading-relaxed">
                QR-код сохраняет не только изображение, но и частичку души: голос, улыбку, воспоминания. 
                Ваши дети и внуки смогут услышать и увидеть дорогого человека, почувствовать его тепло 
                и любовь даже спустя годы.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/8001d540-804a-47dc-b4b9-802d1d95f494.jpg" 
                  alt="Семейные воспоминания на телефоне"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-4">
              <Icon name="Volume2" size={48} className="mx-auto text-primary" />
              <h3 className="text-lg font-heading font-semibold">Голос</h3>
              <p className="text-muted-foreground font-body">Услышьте знакомые интонации и любимые фразы</p>
            </div>
            
            <div className="text-center space-y-4">
              <Icon name="Smile" size={48} className="mx-auto text-primary" />
              <h3 className="text-lg font-heading font-semibold">Улыбка</h3>
              <p className="text-muted-foreground font-body">Увидьте живую мимику и естественные эмоции</p>
            </div>
            
            <div className="text-center space-y-4">
              <Icon name="Heart" size={48} className="mx-auto text-primary" />
              <h3 className="text-lg font-heading font-semibold">Воспоминания</h3>
              <p className="text-muted-foreground font-body">Сохраните важные моменты на века</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground">
              Наши гарантии
            </h2>
            <p className="text-xl font-body text-muted-foreground">
              Мы берём на себя полную ответственность за сохранность ваших воспоминаний
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Защищённое хранение',
                description: 'Все файлы хранятся на защищённых серверах с шифрованием'
              },
              {
                icon: 'Lock',
                title: 'Приватность',
                description: 'Доступ только по QR-коду, никто посторонний не увидит'
              },
              {
                icon: 'RefreshCw',
                title: 'Продление',
                description: 'Возможность продлить хранение в любой момент'
              },
              {
                icon: 'Download',
                title: 'Гарантия файлов',
                description: 'Если сервис прекратит работу — все файлы передаются семье'
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm font-body text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="contact-form" className="py-20 px-4 bg-accent/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground">
              Сделайте первый шаг сегодня
            </h2>
            <p className="text-xl font-body text-muted-foreground">
              Получите бесплатный макет и консультацию по созданию страницы памяти
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-heading font-medium text-foreground">
                      Ваше имя *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Как к вам обращаться"
                      className="font-body"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-heading font-medium text-foreground">
                      Телефон *
                    </label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                      className="font-body"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-heading font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    className="font-body"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-heading font-medium text-foreground">
                    Дополнительная информация
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Расскажите о своих пожеланиях или задайте вопрос"
                    className="font-body min-h-24"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="flex-1 font-heading font-semibold">
                    <Icon name="Send" size={20} />
                    Получить бесплатный макет
                  </Button>
                  <Button type="button" variant="outline" size="lg" className="font-heading">
                    <Icon name="Phone" size={20} />
                    Позвонить нам
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-card border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-heading font-bold text-foreground">Живая память</h3>
              <p className="text-sm font-body text-muted-foreground">
                Сохраняем воспоминания о близких с помощью инновационных технологий
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-foreground">Связь</h4>
              <div className="space-y-2 text-sm font-body text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@living-memory.ru</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-foreground">Мессенджеры</h4>
              <div className="space-y-2 text-sm font-body text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>WhatsApp: +7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  <span>Telegram: @living_memory</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-foreground">Офис</h4>
              <div className="text-sm font-body text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5" />
                  <span>г. Москва, ул. Примерная, д. 123, офис 45</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm font-body text-muted-foreground">
              © 2024 Живая память. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
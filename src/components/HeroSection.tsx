import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
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
  );
}
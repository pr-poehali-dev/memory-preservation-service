import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function ContactFormSection() {
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
  );
}
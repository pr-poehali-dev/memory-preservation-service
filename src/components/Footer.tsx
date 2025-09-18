import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
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
  );
}
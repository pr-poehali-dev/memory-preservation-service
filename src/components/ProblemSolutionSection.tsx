import Icon from '@/components/ui/icon';

export default function ProblemSolutionSection() {
  return (
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
                src="/img/bd2c8724-bfb8-42cd-a0ac-02ef9208170a.jpg" 
                alt="Памятник с фото и QR-кодом"
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
            <p className="text-muted-foreground font-body">QR-код открывает страницу памяти</p>
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
  );
}
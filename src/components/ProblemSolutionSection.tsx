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
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-stone-200 to-stone-300 p-8">
              <div className="space-y-6 text-center">
                <div className="w-24 h-24 mx-auto bg-white rounded-lg shadow-lg flex items-center justify-center">
                  <Icon name="User" size={48} className="text-stone-400" />
                </div>
                
                <div className="space-y-2">
                  <div className="h-3 bg-stone-400 rounded mx-auto w-32"></div>
                  <div className="h-2 bg-stone-300 rounded mx-auto w-24"></div>
                </div>
                
                <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
                  <div className="w-20 h-20 mx-auto bg-black flex items-center justify-center rounded">
                    <div className="grid grid-cols-3 gap-0.5">
                      {Array.from({length: 9}).map((_, i) => (
                        <div key={i} className={`w-1.5 h-1.5 ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}></div>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 mt-2 font-body">Наведите камеру</p>
                </div>
              </div>
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
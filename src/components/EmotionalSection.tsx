import Icon from '@/components/ui/icon';

export default function EmotionalSection() {
  return (
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
  );
}
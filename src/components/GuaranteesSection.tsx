import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function GuaranteesSection() {
  const guarantees = [
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
  ];

  return (
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
          {guarantees.map((item, index) => (
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
  );
}
import { FileText, Shield, Camera } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Оформление ДТП",
    description: "Профессиональная помощь в оформлении документов без участия ГИБДД. Всё сделаем правильно и быстро.",
    features: ["Составление схемы ДТП", "Заполнение извещений", "Помощь в общении со страховой"],
  },
  {
    icon: Shield,
    title: "Консультации по ОСАГО и КАСКО",
    description: "Подскажем, как действовать, чтобы получить максимальную выплату от страховой компании.",
    features: ["Оценка ущерба", "Защита ваших прав", "Помощь в споре со страховой"],
  },
  {
    icon: Camera,
    title: "Фото и видеофиксация",
    description: "Сделаем все необходимые фото- и видео материалы для страховой и защиты ваших прав.",
    features: ["Детальная фотофиксация", "Видео с места ДТП", "Опрос свидетелей"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Полный спектр услуг для решения любых проблем после ДТП
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group bg-[var(--gradient-card)] border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-[var(--shadow-lg)] animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-primary group-hover:animate-float" />
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

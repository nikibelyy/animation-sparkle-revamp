import { Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)]">
        <div className="absolute inset-0 bg-[var(--gradient-glow)] animate-pulse-glow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border animate-scale-in">
            <Clock className="h-4 w-4 text-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Работаем 24/7</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
            Аварийный комиссар{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              в любое время
            </span>{" "}
            и в любом месте
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Помощь при ДТП 24/7 — быстро, профессионально и с заботой о вас
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-300 shadow-[var(--shadow-glow)] text-lg px-8 py-6 animate-pulse-glow"
              asChild
            >
              <a href="tel:+79957192523">
                <Phone className="mr-2 h-5 w-5" />
                Вызвать комиссара
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-foreground hover:bg-primary/10 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+79518703934">
                Бесплатная консультация
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {[
              { title: "Приедем за 15 минут", description: "Быстрая реакция на вызов" },
              { title: "Оформление без ГИБДД", description: "Экономим ваше время" },
              { title: "100% легально", description: "Все по закону РФ" },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-[var(--shadow-md)]"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

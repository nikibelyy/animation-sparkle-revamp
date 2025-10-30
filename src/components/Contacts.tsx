import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contacts = () => {
  return (
    <section id="contacts" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)]">
        <div className="absolute inset-0 bg-[var(--gradient-glow)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Мы всегда на связи и готовы помочь в любое время суток
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
            <div
              className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 hover:scale-105 transition-all duration-500 hover:shadow-[var(--shadow-lg)] animate-slide-in-left"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary animate-float" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Вызов комиссара
              </h3>
              <p className="text-muted-foreground mb-4">
                Срочный выезд на место ДТП
              </p>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-all duration-300 shadow-[var(--shadow-glow)]"
                asChild
              >
                <a href="tel:+79957192523">
                  +7 (995) 719-25-23
                </a>
              </Button>
            </div>

            <div
              className="p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 hover:scale-105 transition-all duration-500 hover:shadow-[var(--shadow-lg)] animate-slide-in-right"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-accent animate-float" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Консультации
              </h3>
              <p className="text-muted-foreground mb-4">
                Бесплатная юридическая помощь
              </p>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-accent text-foreground hover:bg-accent/10 hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="tel:+79518703934">
                  +7 (951) 870-39-34
                </a>
              </Button>
            </div>
          </div>

          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-muted-foreground">
                Сейчас на линии — звоните прямо сейчас!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

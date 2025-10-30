import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border animate-fade-in">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 animate-slide-in-left">
            <div className="text-2xl font-bold text-primary">вызовдтп.рф</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 animate-slide-in-right">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Контакты
            </button>
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-primary to-primary-glow hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a href="tel:+79957192523">
                <Phone className="mr-2 h-4 w-4" />
                Вызвать
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-foreground hover:text-primary transition-colors duration-300"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-left text-foreground hover:text-primary transition-colors duration-300"
            >
              Контакты
            </button>
            <Button
              variant="default"
              size="sm"
              className="bg-gradient-to-r from-primary to-primary-glow w-full"
              asChild
            >
              <a href="tel:+79957192523">
                <Phone className="mr-2 h-4 w-4" />
                Вызвать
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

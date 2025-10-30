export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold text-primary animate-pulse">
            вызовдтп.рф
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Аварийный комиссар. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">
            Профессиональная помощь при ДТП в любое время суток
          </p>
        </div>
      </div>
    </footer>
  );
};

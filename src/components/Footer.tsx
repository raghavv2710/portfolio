'use client';

import * as React from 'react';

const Footer = () => {
  const [year, setYear] = React.useState<number | null>(null);
  
  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-6 border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm text-foreground/60">
        <p>&copy; {year} Raghavendra. All rights reserved.</p>
        <p className="mt-2">Designed and built with passion.</p>
      </div>
    </footer>
  );
};

export default Footer;

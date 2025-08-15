import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductCatalogue from '@/components/ProductCatalogue';
import Cart from '@/components/Cart';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { useCart } from '@/hooks/useCart';

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'catalogue' | 'cart' | 'about' | 'contact'>('home');
  const { getCartItemsCount } = useCart();

  const cartItemsCount = getCartItemsCount();

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <ProductCatalogue />
            <About />
            <Contact />
          </>
        );
      case 'catalogue':
        return <ProductCatalogue />;
      case 'cart':
        return <Cart />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <ProductCatalogue />
            <About />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation cartItemsCount={cartItemsCount} />
      {renderContent()}
    </div>
  );
};

export default Index;
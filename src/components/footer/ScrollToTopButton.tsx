const ScrollToTopButton = () => {
    const scrollToTop = (): void => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <div className="absolute right-8 top-8">
        <button 
          onClick={scrollToTop}
          className="p-2 rounded-full hover:bg-gray-900 transition-colors"
        >
          <img src="/scroll-up.svg" alt="Scroll to top" className="w-6 h-6" />
        </button>
      </div>
    );
  };
  
  export default ScrollToTopButton;
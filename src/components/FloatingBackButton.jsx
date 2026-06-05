import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import '../styles/floating-back-button.css';

const FloatingBackButton = ({ 
  to = "/program", 
  label = "Kembali ke Program",
  enableScrollHide = true,
  scrollDelay = 500,
  debounceMs = 100
}) => {
  // Accessibility: Check for reduced motion preference
  const shouldReduceMotion = useReducedMotion();
  
  // Navigation hook for programmatic navigation and error handling
  const navigate = useNavigate();
  
  // Visibility and scroll detection states
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [showButton, setShowButton] = useState(true);
  
  // Ref for scroll timeout management
  const scrollTimeoutRef = useRef(null);

  // Enhanced navigation handler with error handling and fallbacks
  const handleNavigation = useCallback((event) => {
    try {
      // Allow Link component to handle navigation normally
      // This maintains focus accessibility and client-side routing
      console.log('Navigating to:', to);
      
      // Ensure focus is properly handled for screen readers
      // The Link component will handle this, but we ensure it's announced
      const target = event.currentTarget;
      if (target) {
        // Announce navigation to screen readers
        const announcement = `Navigating to ${label}`;
        const ariaLive = document.createElement('div');
        ariaLive.setAttribute('aria-live', 'polite');
        ariaLive.setAttribute('aria-atomic', 'true');
        ariaLive.className = 'sr-only';
        ariaLive.textContent = announcement;
        document.body.appendChild(ariaLive);
        
        // Remove announcement after screen reader has processed it
        setTimeout(() => {
          if (document.body.contains(ariaLive)) {
            document.body.removeChild(ariaLive);
          }
        }, 1000);
      }
    } catch (error) {
      // Fallback navigation in case of routing errors
      console.error('Navigation error occurred:', error);
      event.preventDefault();
      
      try {
        // Try programmatic navigation as fallback
        navigate(to);
      } catch (fallbackError) {
        console.error('Fallback navigation failed:', fallbackError);
        // Last resort: use window.location for critical navigation
        window.location.href = to;
      }
    }
  }, [to, navigate, label]);

  // Enhanced keyboard event handler for accessibility
  const handleKeyDown = useCallback((event) => {
    // Support both Enter and Space for activation (accessibility best practice)
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent page scroll on Space
      
      // Trigger click event to maintain consistency with mouse interaction
      const linkElement = event.currentTarget;
      if (linkElement) {
        linkElement.click();
      }
    }
  }, []);

  // Initial entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Scroll event handling and cleanup
  useEffect(() => {
    if (!enableScrollHide) return;

    // Debounce function to optimize scroll event handling
    const debounce = (func, wait) => {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };

    const handleScroll = () => {
      // Hide instantly when scrolling starts
      setShowButton(false);
      setIsScrolling(true);

      // Clear existing timeout to reset the "show" delay
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set timeout to show the button again after scrolling stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        setShowButton(true);
      }, scrollDelay);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [enableScrollHide, scrollDelay, debounceMs]);

  // Visibility logic based on initial entrance and scroll state
  const finalVisibility = isVisible && showButton;

  // Responsive breakpoint detection
  const isMobile = window.innerWidth <= 575;
  const isTablet = window.innerWidth > 575 && window.innerWidth <= 768;
  const isDesktop = window.innerWidth > 768;
  
  // Apply scroll-based classes for mobile
  const scrollClass = isMobile ? (showButton ? 'floating-back-button--visible' : 'floating-back-button--hidden') : '';

  // Get responsive icon size: 24px desktop, 22px tablet, 20px mobile
  const getIconSize = () => {
    if (isMobile) return 20;
    if (isTablet) return 22;
    return 24; // desktop
  };

  // Animation variants based on motion preference
  const containerVariants = {
    hidden: { 
      opacity: 0, 
      scale: shouldReduceMotion ? 1 : 0.8, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : 0.5
      }
    }
  };

  const buttonVariants = {
    hover: shouldReduceMotion ? {} : { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: shouldReduceMotion ? {} : { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  const tooltipVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -10 },
    hover: { 
      opacity: 1, 
      x: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.3 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={finalVisibility ? "visible" : "hidden"}
      variants={containerVariants}
      className={`floating-back-container ${scrollClass}`}
    >
      {/* Tooltip - hidden on mobile */}
      {!isMobile && (
        <motion.div 
          className="floating-back-tooltip"
          initial="hidden"
          whileHover="hover"
          variants={tooltipVariants}
        >
          {label}
        </motion.div>
      )}
      
      {/* Main Button with Framer Motion interactions */}
      <motion.div
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        className="floating-back-button-wrapper"
      >
        <Link 
          to={to} 
          className="floating-back-button"
          aria-label={label}
          role="button"
          tabIndex={0}
          onClick={handleNavigation}
          onKeyDown={handleKeyDown}
          onError={(event) => {
            console.error('Link navigation error:', event);
            // Fallback to programmatic navigation
            event.preventDefault();
            try {
              navigate(to);
            } catch (error) {
              window.location.href = to;
            }
          }}
        >
          <ArrowLeft 
            size={getIconSize()} 
            className="floating-back-icon"
          />
        </Link>
      </motion.div>
      
      {/* Pulse Ring Animation */}
      <div className="floating-back-pulse" />
    </motion.div>
  );
};

export default FloatingBackButton;
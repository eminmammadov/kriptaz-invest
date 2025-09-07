import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface GlobalState {
  // UI State
  isLoading: boolean;
  isMobileMenuOpen: boolean;
  cookiesAccepted: boolean;
  
  // User Preferences
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'tr' | 'az';
  
  // Analytics & Tracking
  sessionId: string;
  pageViews: number;
  
  // Actions
  setLoading: (loading: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setCookiesAccepted: (accepted: boolean) => void;
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setLanguage: (language: 'en' | 'tr' | 'az') => void;
  incrementPageViews: () => void;
  generateSessionId: () => void;
  reset: () => void;
}

const initialState = {
  isLoading: false,
  isMobileMenuOpen: false,
  cookiesAccepted: false,
  theme: 'light' as const,
  language: 'en' as const,
  sessionId: '',
  pageViews: 0,
};

export const useGlobalStore = create<GlobalState>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        
        setLoading: (loading: boolean) =>
          set({ isLoading: loading }, false, 'setLoading'),
          
        setMobileMenuOpen: (open: boolean) =>
          set({ isMobileMenuOpen: open }, false, 'setMobileMenuOpen'),
          
        setCookiesAccepted: (accepted: boolean) =>
          set({ cookiesAccepted: accepted }, false, 'setCookiesAccepted'),
          
        setTheme: (theme: 'light' | 'dark' | 'system') =>
          set({ theme }, false, 'setTheme'),
          
        setLanguage: (language: 'en' | 'tr' | 'az') =>
          set({ language }, false, 'setLanguage'),
          
        incrementPageViews: () =>
          set((state) => ({ pageViews: state.pageViews + 1 }), false, 'incrementPageViews'),
          
        generateSessionId: () => {
          if (typeof window !== 'undefined') {
            const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            set({ sessionId }, false, 'generateSessionId');
          }
        },
        
        reset: () =>
          set(initialState, false, 'reset'),
      }),
      {
        name: 'kriptaz-invest-storage',
        partialize: (state) => ({
          cookiesAccepted: state.cookiesAccepted,
          theme: state.theme,
          language: state.language,
          pageViews: state.pageViews,
        }),
        skipHydration: true,
      }
    ),
    {
      name: 'global-store',
    }
  )
);

// Selectors for better performance with memoization
export const useLoading = () => useGlobalStore((state) => state.isLoading);

export const useMobileMenu = () => {
  const isOpen = useGlobalStore((state) => state.isMobileMenuOpen);
  const setOpen = useGlobalStore((state) => state.setMobileMenuOpen);
  return { isOpen, setOpen };
};

export const useCookies = () => {
  const accepted = useGlobalStore((state) => state.cookiesAccepted);
  const setAccepted = useGlobalStore((state) => state.setCookiesAccepted);
  return { accepted, setAccepted };
};

export const useTheme = () => {
  const theme = useGlobalStore((state) => state.theme);
  const setTheme = useGlobalStore((state) => state.setTheme);
  return { theme, setTheme };
};

export const useLanguage = () => {
  const language = useGlobalStore((state) => state.language);
  const setLanguage = useGlobalStore((state) => state.setLanguage);
  return { language, setLanguage };
};
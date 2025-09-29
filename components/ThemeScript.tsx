// ThemeScript.tsx - Must be a Client Component to be rendered by <html/>
"use client"

// This script is injected into the <head> to run before the page renders,
// preventing a flash of unstyled content (FOUC) when loading the theme.
export function ThemeScript() {
  return (
    <script
      id="theme-script"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Check for saved preference in localStorage
            const savedTheme = localStorage.getItem('theme');
            let theme = 'light'; // Default to light

            if (savedTheme) {
              theme = savedTheme;
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              // Check system preference if no saved preference
              theme = 'dark';
            }

            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          })();
        `,
      }}
    />
  );
}

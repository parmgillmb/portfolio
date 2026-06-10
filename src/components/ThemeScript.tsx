// Inline script that runs before paint to apply the saved theme and avoid a
// flash of the wrong colour scheme.
export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark');}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

export const THEME_STORAGE_KEY = "theme";

export const themeScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}document.documentElement.classList.add("js")`;

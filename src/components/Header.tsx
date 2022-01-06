import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } 
      else setIsDark(false);
    });
  }, []);

  return (
    <div className={`flex justify-between p-4 fixed top-0 w-full transition-all z-10 ${isDark ? `bg-[#141414]` : `bg-transparent`}`}>
      <a href="/">
        <img
          className='h-8 ml-4 w-auto'
          src="/assets/logo.png"
          alt="n3tflix"
        />
      </a>
    </div>
  )
}
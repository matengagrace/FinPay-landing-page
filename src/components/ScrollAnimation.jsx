import { useEffect } from "react";

function ScrollAnimation() {
  useEffect(() => {
  const elements = document.querySelectorAll("[class*='animate-fadeInUp']");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0");
      }
    });
  }, { threshold: 0.2 });

  elements.forEach((el) => observer.observe(el));
}, []);


  return (
    <div className="space-y-10">
      <div className="opacity-0 animate-fadeInUp">Bloc 1</div>
      <div className="opacity-0 animate-fadeInLeft">Bloc 2</div>
      <div className="opacity-0 animate-fadeInRight">Bloc 3</div>
    </div>
  );
}

export default ScrollAnimation;
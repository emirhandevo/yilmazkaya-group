"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const slides = [
  { title: "Yılmazkaya Teknoloji", href: "/faaliyet-alanlari/yilmazkaya-teknoloji", image: "/hero/teknoloji.webp" },
  { title: "Alarasol Organik Gübre", href: "/faaliyet-alanlari/alarasol-organik-gubre", image: "/hero/gubre.webp" },
  { title: "Doğa Village", href: "/faaliyet-alanlari/doga-village", image: "/hero/doga-village.webp" },
  { title: "Yılmazkaya GYO", href: "/faaliyet-alanlari/yilmazkaya-gyo", image: "/hero/gyo.webp" },
  { title: "YK Fuarcılık", href: "/faaliyet-alanlari/yk-fuarcilik", image: "/hero/fuarcilik.webp" },
  { title: "Yılmazkaya Barter A.Ş", href: "/faaliyet-alanlari/yilmazkaya-barter", image: "/hero/barter.webp" },
  { title: "Yılmazkaya Tekstil Halı", href: "/faaliyet-alanlari/yilmazkaya-tekstil", image: "/hero/tekstil.webp" },
  { title: "Yılmazkaya Baskı Teknikleri", href: "/faaliyet-alanlari/yilmazkaya-baski-teknikleri", image: "/hero/baski.webp" },
  { title: "Yılmazkaya Vakfı", href: "/faaliyet-alanlari/yilmazkaya-vakif", image: "/hero/vakif.webp" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    startAutoPlay(); // 4 saniye sayacı manuel sağa sola kaydırmalarda sıfırlanır.
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
    startAutoPlay();
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoPlay();
  };

 useEffect(() => {
  startAutoPlay();
  return () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
 }, []);

  // Sıradaki slide'ı önceden yükle
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const img = new window.Image();
    img.src = slides[nextIndex].image;
  }, [activeIndex]);

  return (
    <section className="relative w-full h-[450px] md:h-[650px] overflow-hidden bg-primary">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== activeIndex}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      <div className="absolute inset-0 z-20 bg-black/45" />

      <button
      type="button"
      onClick={goPrev}
      aria-label="Önceki slide"
      className="absolute left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all hover:border-accent hover:bg-black/50 active:scale-95 md:left-6"
      ><FaChevronLeft size={20} /></button>

      <button
      type="button"
      onClick={goNext}
      aria-label="Sonraki slide"
      className="absolute right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-all hover:border-accent hover:bg-black/50 active:scale-95 md:right-6"
      ><FaChevronRight size={20}/></button>

      <div className="relative z-30 flex h-full flex-col justify-end px-[10%] pb-10">
        <h1 className="text-2xl font-bold text-white md:text-4xl">
          {slides[activeIndex].title}
        </h1>
        <Link
          href={slides[activeIndex].href}
          className="mt-3 inline-block w-fit text-sm font-medium text-accent underline-offset-4 hover:underline md:text-base"
        >
          Detaylı bilgi →
        </Link>

        <div className="mt-6 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all active:scale-125 ${
                index === activeIndex ? "w-8 bg-accent" : "w-2 bg-white/50 hover:bg-white/80 active:bg-accent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

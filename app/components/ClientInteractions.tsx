'use client';

import { useEffect } from 'react';

export default function ClientInteractions() {
  useEffect(() => {
    // Scroll suave para links internos
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');

      if (href && href.startsWith('#')) {
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Efeito visual de clique nos botões
    const handleButtonMouseDown = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      btn.classList.add('btn--active');
    };

    const handleButtonMouseUp = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      btn.classList.remove('btn--active');
    };

    const handleButtonMouseLeave = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLElement;
      btn.classList.remove('btn--active');
    };

    // Adicionar event listeners
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    const buttons = document.querySelectorAll<HTMLElement>('.btn');

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    buttons.forEach(btn => {
      btn.addEventListener('mousedown', handleButtonMouseDown);
      btn.addEventListener('mouseup', handleButtonMouseUp);
      btn.addEventListener('mouseleave', handleButtonMouseLeave);
    });

    // Cleanup
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
      buttons.forEach(btn => {
        btn.removeEventListener('mousedown', handleButtonMouseDown);
        btn.removeEventListener('mouseup', handleButtonMouseUp);
        btn.removeEventListener('mouseleave', handleButtonMouseLeave);
      });
    };
  }, []);

  return null;
}


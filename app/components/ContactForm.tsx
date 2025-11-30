'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactForm() {
  const [formMessage, setFormMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const replyToInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Configurar "Reply To" automaticamente quando o email mudar
    const emailInput = emailInputRef.current;
    const replyToInput = replyToInputRef.current;

    if (emailInput && replyToInput) {
      const handleEmailInput = () => {
        if (replyToInput) {
          replyToInput.value = emailInput.value;
        }
      };

      emailInput.addEventListener('input', handleEmailInput);

      return () => {
        emailInput.removeEventListener('input', handleEmailInput);
      };
    }
  }, []);

  useEffect(() => {
    // Verificar se veio de uma página de sucesso do Formspree
    if (typeof window !== 'undefined' && window.location.search.includes('success=true')) {
      setFormMessage({
        text: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
        type: 'success'
      });

      setTimeout(() => {
        window.location.href = window.location.origin + window.location.pathname;
      }, 3000);
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Garantir que _replyto está preenchido com o email
    const emailValue = emailInputRef.current?.value || '';
    if (replyToInputRef.current && emailValue) {
      replyToInputRef.current.value = emailValue;
      formData.set('_replyto', emailValue);
    }

    // Adicionar campo _next para redirecionamento após sucesso
    const currentUrl = typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}?success=true`
      : '';
    formData.append('_next', currentUrl);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      // Verificar se a resposta é JSON
      const contentType = response.headers.get('content-type');
      let data: any = {};

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        // Se não for JSON, pode ser uma resposta de sucesso do Formspree
        const text = await response.text();
        console.log('Formspree response (non-JSON):', text);
      }

      if (response.ok || response.status === 302) {
        setFormMessage({
          text: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
          type: 'success'
        });

        // Limpar formulário
        form.reset();
        if (replyToInputRef.current) {
          replyToInputRef.current.value = '';
        }

        // Redirecionar após 2 segundos
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            window.location.href = currentUrl;
          }
        }, 2000);
      } else {
        // Tratar erros específicos do Formspree
        const errorMessage = data?.error || data?.errors?.[0]?.message || 'Erro ao enviar mensagem. Por favor, tente novamente.';
        setFormMessage({
          text: errorMessage,
          type: 'error'
        });
        console.error('Formspree error:', data);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormMessage({
        text: 'Erro ao enviar mensagem. Por favor, verifique sua conexão e tente novamente.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Esconder mensagem após 5 segundos
    if (formMessage) {
      const timer = setTimeout(() => {
        setFormMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formMessage]);

  return (
    <>
      <form
        ref={formRef}
        action="https://formspree.io/f/mdkzwalv"
        method="POST"
        id="contactForm"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <input type="hidden" name="_replyto" ref={replyToInputRef} />
        <input type="hidden" name="_format" value="plain" />

        <div className="mb-6">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            required
            className="w-full p-4 border-none rounded-lg bg-white/90 text-[#1a1a1a] text-base transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-[0_0_0_3px_rgba(255,255,255,0.3)]"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            name="email"
            placeholder="Seu Email"
            required
            ref={emailInputRef}
            className="w-full p-4 border-none rounded-lg bg-white/90 text-[#1a1a1a] text-base transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-[0_0_0_3px_rgba(255,255,255,0.3)]"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            required
            className="w-full p-4 border-none rounded-lg bg-white/90 text-[#1a1a1a] text-base transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-[0_0_0_3px_rgba(255,255,255,0.3)]"
          />
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            rows={5}
            required
            className="w-full p-4 border-none rounded-lg bg-white/90 text-[#1a1a1a] text-base transition-all duration-300 resize-y min-h-[120px] focus:outline-none focus:bg-white focus:shadow-[0_0_0_3px_rgba(255,255,255,0.3)]"
          ></textarea>
        </div>
        <button
          type="submit"
          id="submitBtn"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center px-6 py-3 border-none rounded-lg text-sm font-semibold no-underline cursor-pointer transition-all duration-300 bg-white text-[#667eea] hover:bg-[#f8f9fa] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <i className="ri-loader-4-line animate-spin mr-2"></i>
              Enviando...
            </>
          ) : (
            'Enviar Mensagem'
          )}
        </button>
      </form>
      {formMessage && (
        <div
          id="formMessage"
          className={`mt-4 p-4 rounded-lg font-medium block ${
            formMessage.type === 'success'
              ? 'bg-green-50 text-green-600 border border-green-200'
              : 'bg-red-50 text-red-600 border border-red-200'
          }`}
        >
          {formMessage.text}
        </div>
      )}
    </>
  );
}


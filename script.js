// ========== ESPERAR A QUE EL DOM ESTÉ CARGADO ==========
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== INYECTAR ESTILOS DE ANIMACIÓN ==========
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        /* Animaciones de entrada */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes zoomIn {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Clases para animaciones */
        .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
            animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
            animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
        }

        .animate-zoomIn {
            animation: zoomIn 0.6s ease-out forwards;
        }

        .animate-slideDown {
            animation: slideDown 0.6s ease-out forwards;
        }

        /* Estados iniciales para elementos que se animarán */
        .will-animate {
            opacity: 0;
        }

        /* Transiciones suaves */
        .smooth-transition {
            transition: all 0.3s ease;
        }

        /* Efecto parallax */
        .parallax-element {
            transition: transform 0.1s ease-out;
        }

        /* Hover effects mejorados */
        .hover-lift:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(255, 0, 255, 0.4) !important;
        }

        .hover-glow:hover {
            box-shadow: 0 0 30px rgba(255, 0, 255, 0.6);
            filter: brightness(1.2);
        }

        .hover-rotate:hover {
            transform: rotate(5deg) scale(1.05);
        }

        /* Efecto de escritura */
        .typing-cursor::after {
            content: '|';
            animation: blink 1s infinite;
        }

        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(animationStyles);

    // ========== ANIMACIÓN DEL LOGO ==========
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.classList.add('smooth-transition');
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // ========== ANIMACIÓN DE ENLACES DE NAVEGACIÓN ==========
    const enlaces = document.querySelectorAll('.enlace');
    enlaces.forEach((enlace, index) => {
        enlace.style.opacity = '0';
        enlace.classList.add('smooth-transition');
        
        setTimeout(() => {
            enlace.style.opacity = '1';
            enlace.style.animation = 'fadeInDown 0.5s ease-out forwards';
        }, index * 100);

        enlace.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.textShadow = '0 0 20px rgba(255, 0, 255, 0.8)';
        });

        enlace.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.textShadow = 'none';
        });
    });

    // ========== ANIMACIÓN DE TÍTULOS ==========
    const titulo = document.querySelector('.titulo');
    const titulo2 = document.querySelector('.titulo2');
    const subtitulo = document.querySelector('.subtitulo');

    if (titulo) {
        titulo.classList.add('will-animate');
        setTimeout(() => {
            titulo.classList.add('animate-fadeInLeft');
        }, 300);
    }

    if (titulo2) {
        titulo2.classList.add('will-animate');
        setTimeout(() => {
            titulo2.classList.add('animate-fadeInRight');
        }, 500);
    }

    if (subtitulo) {
        subtitulo.classList.add('will-animate');
        setTimeout(() => {
            subtitulo.classList.add('animate-fadeIn');
        }, 700);
    }

    // ========== ANIMACIÓN DE BOTONES ==========
    const botones = document.querySelectorAll('.boton-tornasolado, .boton-tornasolado2, .boton-tornasolado3, .boton-tornasolado4');
    botones.forEach((boton, index) => {
        boton.classList.add('smooth-transition', 'will-animate');
        
        setTimeout(() => {
            boton.classList.add('animate-zoomIn');
        }, 900 + (index * 200));

        boton.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });

   
    // Observar títulos
    document.querySelectorAll('.titulop, .titulop2, .titulop3').forEach(el => {
        observer.observe(el);
    });

    // Observar textos
    document.querySelectorAll('.text, .text2, .textqs, .texta').forEach(el => {
        observer.observe(el);
    });

    // Observar imágenes
    document.querySelectorAll('.imagen').forEach(el => {
        el.classList.add('smooth-transition', 'hover-lift');
        observer.observe(el);
    });

    // ========== ANIMACIÓN DE IMÁGENES CON HOVER 3D ==========
    const imagenes = document.querySelectorAll('.imagen');
    imagenes.forEach(img => {
        img.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        img.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // ========== ANIMACIÓN DEL PRODUCTO ==========
    const producto = document.getElementById('producto');
    if (producto) {
        producto.classList.add('smooth-transition', 'will-animate');
        
        setTimeout(() => {
            producto.style.opacity = '1';
            producto.style.animation = 'zoomIn 1s ease-out forwards';
        }, 300);

        producto.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08) rotateY(5deg)';
            this.style.boxShadow = '0 20px 60px rgba(255, 0, 255, 0.6)';
        });

        producto.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotateY(0deg)';
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        });
    }

    // ========== ANIMACIÓN DE INPUTS DEL FORMULARIO ==========
    const inputs = document.querySelectorAll('.input-text');
    inputs.forEach((input, index) => {
        input.classList.add('smooth-transition');
        input.style.opacity = '0';
        
        setTimeout(() => {
            input.style.opacity = '1';
            input.style.animation = 'fadeInUp 0.5s ease-out forwards';
        }, index * 100);

        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.4)';
            this.style.border = '2px solid rgba(255, 0, 255, 0.5)';
        });

        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
            this.style.border = 'none';
        });

        // Efecto de escritura
        input.addEventListener('input', function() {
            this.style.animation = 'pulse 0.3s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });

    // ========== VALIDACIÓN DEL FORMULARIO CON ANIMACIÓN ==========
    const formulario = document.querySelector('.formulario');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const allInputs = this.querySelectorAll('.input-text');
            
            allInputs.forEach(input => {
                if (input.value.trim() === '') {
                    isValid = false;
                    input.style.border = '2px solid red';
                    input.style.animation = 'shake 0.5s ease';
                    
                    setTimeout(() => {
                        input.style.border = 'none';
                        input.style.animation = '';
                    }, 500);
                }
            });

            if (isValid) {
                const btnSubmit = this.querySelector('.boton-tornasolado4');
                const originalText = btnSubmit.value;
                
                btnSubmit.value = '¡PROCESANDO...!';
                btnSubmit.style.background = 'linear-gradient(45deg, #00ff00, #00cc00, #00ff00)';
                btnSubmit.style.animation = 'pulse 0.5s ease-in-out infinite';
                
                setTimeout(() => {
                    btnSubmit.value = '¡COMPRA EXITOSA! ✓';
                    btnSubmit.style.animation = 'zoomIn 0.5s ease-out';
                    
                    // Crear confeti
                    createConfetti();
                    
                    setTimeout(() => {
                        alert('¡Gracias por tu compra!\n\nRecibirás un email de confirmación en breve.');
                        btnSubmit.value = originalText;
                        btnSubmit.style.background = '';
                        btnSubmit.style.animation = '';
                    }, 2000);
                }, 1500);
            }
        });
    }

    // ========== ANIMACIÓN DE TÍTULOS DE COMPRA ==========
    const titulosc = document.querySelectorAll('.titulosc h1, .titulosc h2, .titulosc h4');
    titulosc.forEach((titulo, index) => {
        titulo.style.opacity = '0';
        setTimeout(() => {
            titulo.style.opacity = '1';
            titulo.style.animation = 'fadeInRight 0.8s ease-out forwards';
        }, index * 200);
    });

    // ========== ANIMACIÓN DEL DESCUENTO ==========
    const descuento = document.querySelector('.descuento');
    if (descuento) {
        descuento.style.animation = 'pulse 2s ease-in-out infinite';
        descuento.classList.add('smooth-transition');
        
        descuento.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(-5deg)';
        });
        
        descuento.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // ========== EFECTO PARALLAX EN EL HEADER ==========
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const header = document.querySelector('.header');
                
                if (header && scrolled < window.innerHeight) {
                    header.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });

    // ========== SMOOTH SCROLL PARA ENLACES ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== ANIMACIÓN DEL FOOTER ==========
    const footer = document.querySelector('.footer');
    if (footer) {
        const footerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const elementos = footer.querySelectorAll('.contactanos, .medio, .escudo');
                    elementos.forEach((el, index) => {
                        el.style.opacity = '0';
                        setTimeout(() => {
                            el.style.opacity = '1';
                            el.style.animation = 'fadeInUp 0.6s ease-out forwards';
                        }, index * 150);
                    });
                    footerObserver.unobserve(footer);
                }
            });
        }, { threshold: 0.2 });
        
        footerObserver.observe(footer);
    }

    // ========== ANIMACIÓN DEL ESCUDO ==========
    const escudo = document.querySelector('.escudo');
    if (escudo) {
        escudo.classList.add('smooth-transition');
        escudo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(360deg)';
        });
        escudo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // ========== CREAR EFECTO CONFETI ==========
    function createConfetti() {
        const colors = ['#ff00ff', '#ff0080', '#8000ff', '#00ffff', '#ffff00'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = '1';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.borderRadius = '50%';
            
            document.body.appendChild(confetti);
            
            const duration = Math.random() * 3 + 2;
            const endPosition = Math.random() * window.innerHeight + window.innerHeight;
            
            confetti.animate([
                { 
                    transform: 'translateY(0) rotate(0deg)',
                    opacity: 1
                },
                { 
                    transform: `translateY(${endPosition}px) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: duration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }

    // ========== CURSOR PERSONALIZADO (OPCIONAL) ==========
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255, 0, 255, 0.5);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'scale(0.8)';
    });

    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'scale(1)';
    });

    // ========== CONTADOR DE NÚMEROS ANIMADO ==========
    const animateNumber = (element, start, end, duration) => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
                clearInterval(timer);
            }
            element.textContent = '$' + Math.floor(current) + 'USD';
        }, 16);
    };

    const precioElemento = document.querySelector('.titulosc h2');
    if (precioElemento && precioElemento.textContent.includes('$99')) {
        const precioObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(precioElemento, 0, 99, 1500);
                    precioObserver.unobserve(precioElemento);
                }
            });
        }, { threshold: 0.5 });
        
        precioObserver.observe(precioElemento);
    }

    // ========== ANIMACIÓN DE CARGA INICIAL ==========
    setTimeout(() => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    }, 0);

    // ========== EFECTO DE PARTÍCULAS EN EL FONDO ==========
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        document.body.insertBefore(particlesContainer, document.body.firstChild);

        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 3px;
                height: 3px;
                background: rgba(255, 0, 255, 0.5);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                animation: float-up ${Math.random() * 20 + 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            particlesContainer.appendChild(particle);
        }

        const particleAnimation = document.createElement('style');
        particleAnimation.textContent = `
            @keyframes float-up {
                0% {
                    transform: translateY(100vh) scale(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(-100vh) scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(particleAnimation);
    }

    createParticles();

    console.log(' Animaciones cargadas exitosamente');
});
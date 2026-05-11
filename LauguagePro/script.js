document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navegação Suave (Smooth Scroll)
    // Melhora a experiência de navegação entre as seções
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Compensando a altura do header fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Animação de Revelação (Conceito Gestalt: Fechamento/Continuidade)
    // Faz os elementos aparecerem conforme o usuário rola a página
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .hero-content, .section-title').forEach(el => {
        el.classList.add('reveal'); // Classe inicial escondida
        observer.observe(el);
    });

    // 3. Gerenciamento do Formulário (Foco em Ads/Marketing)
    const form = document.getElementById('ads-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulação de envio para um CRM ou ferramenta de e-mail marketing
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = "Enviando...";
        btn.disabled = true;

        // Simulando delay de rede
        setTimeout(() => {
            alert('Obrigado! Nossa equipe entrará em contato em breve para seu nivelamento.');
            form.reset();
            btn.innerText = originalText;
            btn.disabled = false;
            
            // Aqui você dispararia a "Tag de Conversão" do Google Ads
            console.log("Conversão registrada para o Google Ads.");
        }, 1500);
    });
});
# Aura Sound X — Landing Page 3D Interativa

![Prévia do Projeto](COLE_O_CAMINHO_OU_NOME_DO_PRINT_AQUI.png)

> Uma landing page moderna e imersiva desenvolvida para apresentação de produto, utilizando animação 3D baseada em scroll (sequência de frames renderizados no Blender) e um design futurista em Dark Mode.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando apenas tecnologias nativas da web, focando em alta performance e fluidez:
* **HTML5:** Estruturação semântica das seções.
* **CSS3:** Estilização avançada, Flexbox, Grid Layout, Glassmorphism e responsividade Mobile.
* **JavaScript (Vanilla):** Controle síncrono da animação 3D atrelada ao evento de `scroll` da página.
* **Blender:** Modelagem, texturização e renderização da sequência de frames do produto.

---

## ✨ Funcionalidades

* **Animação 3D por Scroll:** O modelo do headset gira e se movimenta conforme o usuário rola a página.
* **Design Responsivo:** Adaptado para telas de Desktop e Dispositivos Móveis (Mobile).
* **Seções Completas:** 
  * Cabeçalho fixo (*Navbar*) com navegação fluida.
  * Seção Hero de apresentação.
  * Seção de acabamento e detalhes visuais.
  * Grade de Especificações Técnicas (Features).
  * Seção de Avaliações / Prova Social.
  * Chamada para Ação final (*CTA* de compra).
  * Rodapé com links e créditos do modelo 3D.

---

## 📂 Estrutura de Pastas

```text
/
├── assets/
│   └── imgs/
│       └── back_1.jpg      # Imagem de fundo estilizada
├── frames/
│   ├── frame_1.png         # Sequência de frames renderizados
│   ├── frame_2.png
│   └── ... (até frame_90)
├── index.html              # Arquivo principal HTML
├── style.css               # Estilos e responsividade
└── script.js               # Lógica de controle do scroll e canvas 3D
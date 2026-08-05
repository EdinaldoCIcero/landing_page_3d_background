const frameCount = 90;
const images = [];
const canvas = document.getElementById("headset-canvas");
const context = canvas.getContext("2d");

// Função que define o caminho de cada frame
const currentFrame = index => {
    return `assets/imgs/frames/frame_${index}.png`;
};

// Cria os objetos de imagem antecipadamente na memória
for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    images.push(img);
}

// Função para carregar um frame específico sob demanda de forma segura
function loadFrame(index) {
    if (!images[index - 1].src) {
        images[index - 1].src = currentFrame(index);
    }
}

// Desenha o primeiro frame logo de cara para a página não ficar vazia
images[0].src = currentFrame(1);
images[0].onload = () => {
    canvas.width = images[0].naturalWidth;
    canvas.height = images[0].naturalHeight;
    context.drawImage(images[0], 0, 0);
};

// Atualiza o frame com base no scroll de forma fluida
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollHeight;
    
    let frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
    );
    
    const targetIndex = frameIndex + 1;
    loadFrame(targetIndex);
    
    requestAnimationFrame(() => {
        if (images[targetIndex - 1] && images[targetIndex - 1].complete) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[targetIndex - 1], 0, 0);
        }
    });
});
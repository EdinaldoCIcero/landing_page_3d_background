// Total de frames renderizados no Blender
const frameCount = 90;
const images = [];

const canvas = document.getElementById("headset-canvas");
const context = canvas.getContext("2d");


// Função que define o caminho de cada frame
const currentFrame = index => {
    return `assets/imgs/frames/frame_${index}.png`;
};


// Pré-carrega todas as imagens para a memória na inicialização
function preloadImages() {
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        
        img.onload = () => {
            // Quando carregar o primeiro frame, ajusta o canvas para o tamanho real da imagem
            if (i === 1) {
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                context.drawImage(img, 0, 0);
            }
        };
        
        images.push(img);
    }
}

// Atualiza o frame com base na posição do scroll da página
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollHeight;
    
    // Descobre qual frame mostrar com base no scroll
    let frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
    );
    
    requestAnimationFrame(() => updateImage(frameIndex + 1));
});

function updateImage(index) {
    if (images[index - 1] && images[index - 1].complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[index - 1], 0, 0);
    }
}

// Inicia o carregamento
preloadImages();
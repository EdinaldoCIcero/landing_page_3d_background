const canvas = document.getElementById("headset-canvas");
const context = canvas.getContext("2d");

// Total de frames que você vai renderizar no Blender (sugestão: 90 frames)
const frameCount = 90; 

// const currentFrame = index => {
//     const frameNumber = String(index).padStart(3, '');
//    return `frames/frame_${frameNumber}.png`;
//};

// Total de frames renderizados no Blender

const currentFrame = index => {
    // Como os arquivos estão salvos como frame_1, frame_2, etc., 
    // usamos o índice direto sem preencher com zeros.
    return `assets/imgs/frames/frame_${index}.png`;
};



const images = [];
let framesLoaded = 0;

const animationState = {
    frame: 0
};

// Pré-carregamento das imagens
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload = () => {
        framesLoaded++;
        if (framesLoaded === frameCount) {
            render();
        }
    };
    images.push(img);
}

// Resolução padrão em HD para o render
canvas.width = 1920;
canvas.height = 1080;

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const currentImg = images[animationState.frame];
    if (currentImg) {
        context.drawImage(currentImg, 0, 0);
    }
}

// Controle da animação atrelada ao scroll do mouse
window.addEventListener('scroll', () => {  
    const scrollTop = window.scrollY;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    
    const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
    );
    
    animationState.frame = frameIndex;
    requestAnimationFrame(render);
});
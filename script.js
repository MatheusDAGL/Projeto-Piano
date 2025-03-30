document.querySelectorAll('.white-key, .black-key').forEach(key => {
    key.addEventListener('mousedown', () => {
        key.classList.add('active');
        const note = key.dataset.note;
        const audioElement = document.getElementById(`s_${note}`);
        
        if (audioElement) {
            console.log(audioElement);
            audioElement.currentTime = 0;
            audioElement.play().catch(e => console.error("Erro ao tocar:", e));
        } else {
            console.warn(`Áudio não encontrado para a nota: ${note}`);
        }
    });

 

    key.addEventListener('mouseup', () => {
        key.classList.remove('active');
    });

    key.addEventListener('mouseleave', () => {
        key.classList.remove('active');
    });
});

document.body.addEventListener('keydown',(nota)=>{

    const audioElement = document.getElementById(`s_${nota.key.toUpperCase()}`);
    if (audioElement) {
        console.log(audioElement);
        audioElement.currentTime = 0;
        audioElement.play().catch(e => console.error("Erro ao tocar:", e));
    } else {
        console.warn(`Áudio não encontrado para a nota: ${note}`);
    }
})
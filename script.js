document.querySelectorAll('.white-key, .black-key').forEach(key => {
    key.addEventListener('mousedown', () => {
        key.classList.add('active');
        const note = key.dataset.note;
        const audioElement = document.getElementById(`s_${note}`);
        
        if (audioElement) {
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

let teclaPressionada = {};
const mapeamentoTeclas = {
    'CapsLock': 'C', 
    'KeyA': 'D', 
    'KeyS': 'E', 
    'KeyD': 'F',
    'KeyF': 'G', 
    'KeyG': 'A', 
    'KeyH': 'B', 
    'KeyJ': 'C2',
    'KeyK': 'D2', 
    'KeyL': 'E2', 
    'Semicolon': 'F2',
    'Quote': 'G2', 
    'Backslash': 'A2', 
    'Enter': 'B2',
    'Delete': 'C3',
    'KeyQ': 'Db',   
    'KeyW': 'Eb',    
    'KeyR': 'Gb',   
    'KeyT': 'Ab',    
    'KeyY': 'Bb',    
    'KeyI': 'Db2',  
    'KeyO': 'Eb2',   
    'BracketLeft': 'Gb2',  
    'BracketRight': 'Ab2', 
    'Backspace': 'Bb2'     
  };

document.body.addEventListener('keydown',(nota)=>{
    if (!teclaPressionada[nota.code]) {
        teclaPressionada[nota.code] = true;
        let codigo = mapeamentoTeclas[nota.code];
        converterNota(codigo, teclaPressionada);
        
        const audioElement = document.getElementById(`s_${codigo}`);
        if (audioElement) {
            console.log(audioElement)
            audioElement.currentTime = 0;
            audioElement.play().catch(e => console.error("Erro ao tocar:", e));
        } else {
            
            console.warn(`Áudio não encontrado para a nota: ${codigo}`);
        }
    }
});

converterNota = (codigo,teclaPressionada) => {
    let cor = document.querySelector(`[data-note=${codigo}]`);
    cor.classList.add('active');
    document.body.addEventListener('keyup', function(nota) {
        teclaPressionada[nota.code] = false;     
        cor.classList.remove('active');
    });    
}




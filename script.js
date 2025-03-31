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

document.body.addEventListener('keydown',(nota)=>{
    if (!teclaPressionada[nota.code]) {
        teclaPressionada[nota.code] = true;
        let codigo = nota.code;
        console.log(codigo);

        switch(codigo){
            case 'CapsLock':
                codigo = 'C';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyA':
                codigo = 'D';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyS':
                codigo = 'E';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyD':
                codigo = 'F';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyF':
                codigo = 'G';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyG':
                codigo = 'A';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyH':
                codigo = 'B';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyJ':
                codigo = 'C2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyK':
                codigo = 'D2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyL':
                codigo = 'E2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'Semicolon':
                codigo = 'F2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'Quote':
                codigo = 'G2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'Backslash':
                codigo = 'A2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'Enter':
                codigo = 'B2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'Delete':
                codigo = 'C3';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyQ':
                codigo = 'Db';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyW':
                codigo = 'Eb';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyR':
                codigo = 'Gb';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyT':
                codigo = 'Ab';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyY':
                codigo = 'Bb';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyI':
                codigo = 'Db2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'KeyO':
                codigo = 'Eb2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'BracketLeft':
                codigo = 'Gb2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'BracketRight':
                codigo = 'Ab2';
                converterNota(codigo,teclaPressionada);
                break;
            case 'Backspace':
                codigo = 'Bb2';
                                converterNota(codigo,teclaPressionada);
                break;
    
        }
        const audioElement = document.getElementById(`s_${codigo}`);
        if (audioElement) {
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
        cor = document.querySelector(`[data-note=${codigo}]`);
        cor.classList.remove('active');
    });    
}




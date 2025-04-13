let teclaPressionada = {};

let mapeamentoTeclas = {
    abnt:{
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
    }, 
    americano:{
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
        'KeyZ': 'F2',
        'KeyC': 'G2', 
        'KeyB': 'A2', 
        'KeyM': 'B2',
        'Comma': 'C3',
        'KeyQ': 'Db',   
        'KeyW': 'Eb',    
        'KeyR': 'Gb',   
        'KeyT': 'Ab',    
        'KeyY': 'Bb',    
        'KeyI': 'Db2',  
        'KeyO': 'Eb2',   
        'KeyX': 'Gb2',  
        'KeyV': 'Ab2', 
        'KeyN': 'Bb2'     
      },
    };

let tecladoAmericano = true;

let converterNota = (codigo,teclaPressionada) => {
    let cor = document.querySelector(`[data-note=${codigo}]`);
    cor.classList.add('active');
    document.body.addEventListener('keyup', function(nota) {
        teclaPressionada[nota.code] = false;     
        cor.classList.remove('active');
    });    
}

document.querySelectorAll('.white-key, .black-key').forEach(key => {
    key.addEventListener('mousedown', () => {
        key.classList.add('active');
        const note = key.dataset.note;
        const audioElement = document.getElementById(`s_${note}`);
        if (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play();
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
    if (!teclaPressionada[nota.code]) {
        teclaPressionada[nota.code] = true;
        let codigo = {}
        if (tecladoAmericano){
            codigo = mapeamentoTeclas.abnt[nota.code];
        } else {
            codigo = mapeamentoTeclas.americano[nota.code];
        }
        converterNota(codigo, teclaPressionada);
        const audioElement = document.getElementById(`s_${codigo}`);
        if (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play();

        }
    }
});

document.querySelector('button').addEventListener('click',()=>{
    if (tecladoAmericano){
        document.querySelector('[data-note=F2]').innerHTML = "Z";
        document.querySelector('[data-note=G2]').innerHTML = "C";
        document.querySelector('[data-note=A2]').innerHTML = "B";
        document.querySelector('[data-note=B2]').innerHTML = "M";
        document.querySelector('[data-note=C3]').innerHTML = ",";
        document.querySelector('[data-note=Gb2]').innerHTML = "X";
        document.querySelector('[data-note=Ab2]').innerHTML = "V";
        document.querySelector('[data-note=Bb2]').innerHTML = "N";
        document.querySelector('button').innerHTML = "Mudar para teclado ABNT";
        tecladoAmericano = !tecladoAmericano;
    } else {
        document.querySelector('button').innerHTML = "Mudar para teclado americano";
        document.querySelector('[data-note=F2]').innerHTML = "Ç";
        document.querySelector('[data-note=G2]').innerHTML = "^~";
        document.querySelector('[data-note=A2]').innerHTML = "]";
        document.querySelector('[data-note=B2]').innerHTML = "ENTE";
        document.querySelector('[data-note=C3]').innerHTML = "DEL";
        document.querySelector('[data-note=Gb2]').innerHTML = "`";
        document.querySelector('[data-note=Ab2]').innerHTML = "[";
        document.querySelector('[data-note=Bb2]').innerHTML = "BACK";
        tecladoAmericano =!tecladoAmericano;
    }  
});



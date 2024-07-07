const addProduct = () => {
    const input = document.querySelector('input');
    const ul = document.querySelector('ul');
    
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    li.innerText = input.value;
    li.prepend(checkbox); // 'prepend' l'ho dovuto cercare e capire perché nella video lezione non è stato citato 
    ul.appendChild(li);
    
    input.value = '';
  };

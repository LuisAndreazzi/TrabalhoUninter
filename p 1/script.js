document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'Clique para ver uma mensagem!';
    
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message-container';
    
    const paragraph = document.querySelector('p');
    paragraph.parentNode.insertBefore(button, paragraph.nextSibling);
    button.parentNode.insertBefore(messageDiv, button.nextSibling);

    button.addEventListener('click', function() {
        messageDiv.textContent = 'Olá! Bem-vindo ao meu trabalho de Fundamentos de Desenvolvimento de Software!';
    });
});

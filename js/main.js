document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tour-item').forEach(item => {
        const toggleArrow = item.querySelector('.toggle-arrow');
        const info = item.querySelector('.tour-info');

        toggleArrow.addEventListener('click', () => {
            if (item.classList.contains('open')) {
            
                item.classList.remove('open');
                info.style.maxHeight = '0'; 
            } else {
                
                document.querySelectorAll('.tour-item.open').forEach(openItem => {
                    openItem.classList.remove('open');
                    openItem.querySelector('.tour-info').style.maxHeight = '0'; 
                });

                item.classList.add('open');
                info.style.maxHeight = info.scrollHeight + 'px';
            }
        });
    });
});



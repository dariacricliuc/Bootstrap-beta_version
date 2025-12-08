document.addEventListener('DOMContentLoaded', function() {
    // Обработка кнопок "Сохранить" и "Подписаться"
    const saveBtn = document.getElementById('saveBtn');
    const subscribeBtn = document.getElementById('subscribeBtn');
    
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const isActive = this.classList.toggle('active');
            
            if (isActive) {
                this.innerHTML = '<i class="bi bi-bookmark-check"></i> ✓ Сохранено';
                this.classList.remove('btn-outline-primary');
                this.classList.add('btn-primary');
            } else {
                this.innerHTML = '<i class="bi bi-bookmark"></i> Сохранить';
                this.classList.remove('btn-primary');
                this.classList.add('btn-outline-primary');
            }
            
            this.setAttribute('aria-pressed', isActive);
        });
    }
    
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const isActive = this.classList.toggle('active');
            
            if (isActive) {
                this.innerHTML = '<i class="bi bi-bell-fill"></i> ✓ Вы подписаны';
                this.classList.remove('btn-outline-info');
                this.classList.add('btn-info');
            } else {
                this.innerHTML = '<i class="bi bi-bell"></i> Подписаться';
                this.classList.remove('btn-info');
                this.classList.add('btn-outline-info');
            }
            
            this.setAttribute('aria-pressed', isActive);
        });
    }
});
function selectModalHandler(select, event) {
    switch (event) {
        case 'hover':
            select.querySelector('.select-modal').classList.remove('hidden');
            break;
        case 'leave':
            select.querySelector('.select-modal').classList.add('hidden');
            break;
    }
}
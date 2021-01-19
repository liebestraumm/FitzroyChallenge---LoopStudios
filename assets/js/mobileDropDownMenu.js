    let dropDowns = document.querySelectorAll('[data-open-dropdown]');
    const modal = document.querySelector('.modal');
    const btnCloseModal = document.querySelector('.close-modal');

    let close = () => {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }

    dropDowns.forEach(dropDown => {
        dropDown.addEventListener("click", (e) => {
            e.preventDefault();
            modal.classList.remove('hidden')
        });
    });

    btnCloseModal.addEventListener('click', close);
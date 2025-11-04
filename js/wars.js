document.addEventListener('DOMContentLoaded', function() {
    const dropdownWrapper = document.querySelector('.doomsday-dropdown-wrapper');
    const trigger = dropdownWrapper.querySelector('.doomsday-trigger');
    
    trigger.addEventListener('click', function() {
        dropdownWrapper.classList.toggle('expanded');
    });
});
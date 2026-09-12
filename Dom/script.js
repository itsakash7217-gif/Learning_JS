document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const resultDiv = document.getElementById('list');
    input.addEventListener('input', function() {
        const value = input.value.trim().toUpperCase();
        const items = Array.from(resultDiv.children);

items.forEach((item) => {
    item.style.display =
        item.innerText === value ? '' : 'none';
});
    });
});
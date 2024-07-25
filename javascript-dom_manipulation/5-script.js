document.addEventListener('DOMContentLoaded', () => {
    const updateHeaderElement = document.getElementById('update_header');
    updateHeaderElement.addEventListener('click', () => {
      const headerElement = document.querySelector('header');
      headerElement.textContent = 'New Header!!!';
    });
  });
  
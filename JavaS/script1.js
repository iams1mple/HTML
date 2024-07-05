document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-btn');
    const productGrid = document.getElementById('productGrid');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Here you would typically fetch and display products based on the selected tab
        // For this example, we'll just log the selected tab
        console.log('Selected tab:', tab.dataset.tab);
        
        // In a real application, you might do something like:
        // fetchProducts(tab.dataset.tab).then(products => displayProducts(products));
      });
    });
  });
  
  function displayProducts(products) {
    // This function would update the productGrid with new product cards
    // based on the data received from the server
  }
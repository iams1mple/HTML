document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.querySelector('.feedback-form');
    
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const feedbackText = this.querySelector('textarea').value;
      
      if (feedbackText.trim() !== '') {
        // Here you would typically send the feedback to your server
        console.log('Feedback submitted:', feedbackText);
        alert('Thank you for your feedback!');
        this.reset();
      } else {
        alert('Please enter your feedback before submitting.');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        
        question.classList.toggle('active');
        answer.classList.toggle('active');
        
        if (answer.classList.contains('active')) {
          icon.textContent = '−';
        } else {
          icon.textContent = '+';
        }
      });
    });
  });
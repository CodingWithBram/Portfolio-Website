document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('formStatus');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      statusDiv.textContent = '';
      let hasError = false;
  
      // Clear previous errors
      form.querySelectorAll('.error-message').forEach(span => span.textContent = '');
  
      // Basic validation
      const nameEl = form.name;
      const emailEl = form.email;
      const messageEl = form.message;
  
      if (!nameEl.value.trim()) {
        form.querySelector('label[for="name"] + .error-message').textContent = 'Name is required';
        hasError = true;
      }
      if (!emailEl.value.trim()) {
        form.querySelector('label[for="email"] + .error-message').textContent = 'Email is required';
        hasError = true;
      } else if (!/\S+@\S+\.\S+/.test(emailEl.value)) {
        form.querySelector('label[for="email"] + .error-message').textContent = 'Email is invalid';
        hasError = true;
      }
      if (!messageEl.value.trim()) {
        form.querySelector('label[for="message"] + .error-message').textContent = 'Message is required';
        hasError = true;
      }
  
      if (hasError) {
        return;
      }
  
      // Optionally: disable form while sending
      form.querySelector('button[type="submit"]').disabled = true;
  
      // Simulate sending (replace with actual fetch to your server)
      try {
        // Example: send via fetch to your backend endpoint
        /*
        const resp = await fetch('/api/contact', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            name: nameEl.value,
            email: emailEl.value,
            message: messageEl.value
          })
        });
        const data = await resp.json();
        if (!resp.ok) throw new Error(data.error || 'Submission failed');
        */
  
        // Simulated success delay
        await new Promise(r => setTimeout(r, 1000));
  
        statusDiv.textContent = 'Thanks! I’ll get back to you soon.';
        form.reset();
      } catch (err) {
        statusDiv.textContent = 'Oops — something went wrong. Please try again later.';
        statusDiv.style.color = 'var(--error-color)';
      } finally {
        form.querySelector('button[type="submit"]').disabled = false;
      }
    });
  });
  

// Email notification functionality
function handleNotifyMe() {
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();
    
    if (email) {
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email)) {
            showToast("Thank you! We'll notify you when registrations open.", 'success');
            emailInput.value = '';
        } else {
            showToast('Please enter a valid email address', 'error');
        }
    } else {
        showToast('Please enter your email address', 'error');
    }
}

// Toast notification system
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.remove('hidden');
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, 4000);
}

// Allow Enter key to submit email
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email-input');
    
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleNotifyMe();
        }
    });
});

// Smooth scrolling for any future internal links
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional interactive functionality here
    console.log('Namaste Bitcoin 2026 - Landing Page Loaded');
});

// document.addEventListener('DOMContentLoaded', () => {

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  document.querySelector('.menu-item-install').style.display = 'block';
  document.querySelector('.install-trigger').style.display = 'block';
});

document.querySelectorAll('.install-trigger').forEach(element => {

  element.addEventListener('click', () => {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        document.querySelector('.menu-item-install').style.display = 'none';
        document.querySelector('.install-trigger').style.display = 'none';
      } else {
        console.log('User dismissed the install prompt');
      }
    });

  });
});

// });

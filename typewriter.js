document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('typewriter-title');
  if (!container) return;

  const text1 = "Bienvenidos y";
  const text2 = "Bienvenidas";

  // Create spans for each line
  const line1 = document.createElement('span');
  line1.className = 'typewriter-line';
  const line2 = document.createElement('span');
  line2.className = 'typewriter-line brand-span';
  const br = document.createElement('br');
  const cursor = document.createElement('span');
  cursor.className = 'typewriter-cursor';
  cursor.innerHTML = '|';

  container.appendChild(line1);
  container.appendChild(br);
  container.appendChild(line2);
  container.appendChild(cursor);

  let currentLine = 1;
  let charIndex = 0;
  const speed = 100; // ms per character

  function type() {
    if (currentLine === 1) {
      if (charIndex < text1.length) {
        line1.textContent += text1.charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
      } else {
        currentLine = 2;
        charIndex = 0;
        setTimeout(type, speed * 2); // pause before second line
      }
    } else if (currentLine === 2) {
      if (charIndex < text2.length) {
        line2.textContent += text2.charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
      } else {
        // Animation finished, cursor keeps blinking
      }
    }
  }

  // Start animation
  setTimeout(type, 1000); // initial delay
});

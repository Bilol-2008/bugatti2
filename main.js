
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach(card => {
      const el = card;
      const rect = () => el.getBoundingClientRect();
  
      const onMove = e => {
        const r = rect();
        const x = (e.clientX ?? (e.touches && e.touches[0].clientX)) - r.left;
        const y = (e.clientY ?? (e.touches && e.touches[0].clientY)) - r.top;
        const px = (x / r.width) * 2 - 1; 
        const py = (y / r.height) * 2 - 1;
        const rotateY = px * 6;
        const rotateX = -py * 6;
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
      };
  
      el.addEventListener('mousemove', onMove);
      el.addEventListener('touchmove', onMove, { passive: true });
  
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
      el.addEventListener('touchend', () => {
        el.style.transform = '';
      });
  

      el.addEventListener('focusin', () => el.style.transform = 'translateY(-6px) scale(1.01)');
      el.addEventListener('focusout', () => el.style.transform = '');
    });

    const vid = document.querySelector('.advertising__video');
    if (vid) {
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          try { vid.pause(); } catch (e) {}
        } else {
          try { vid.play(); } catch (e) {}
        }
      });
    }
  });
  
  

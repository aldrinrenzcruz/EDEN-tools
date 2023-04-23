window.addEventListener('load', () => {
  const statusDiv = document.querySelector('#idle-mode-status-ui');
  let wakeLock = null;
  let isWakeLockEnabled = true;

  const requestWakeLock = async () => {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => {
        statusDiv.innerHTML = "Idle <i class='bi bi-x-lg'></i>";
      });
      statusDiv.innerHTML = "Idle <i class='bi bi-check2'></i>";
    } catch (e) {
      if (e.name === "NotAllowedError") {
        isWakeLockEnabled = false;
        statusDiv.innerHTML = "Idle <i class='bi bi-x-lg'></i>";
      } else {
        statusDiv.textContent = `${e.name}, ${e.message}`;
      }
    }
  };

  if ('wakeLock' in navigator && 'request' in navigator.wakeLock) {
    requestWakeLock();
  } else {
    statusDiv.textContent = 'Wake Lock API not supported.';
  }

  document.addEventListener('visibilitychange', () => {
    if (wakeLock !== null && document.visibilityState === 'visible') {
      requestWakeLock();
    }
  });

  statusDiv.addEventListener('click', () => {
    if (isWakeLockEnabled) {
      wakeLock.release();
      wakeLock = null;
      isWakeLockEnabled = false;
      statusDiv.innerHTML = "Idle <i class='bi bi-x-lg'></i>";
    } else {
      requestWakeLock();
      isWakeLockEnabled = true;
    }
  });
});
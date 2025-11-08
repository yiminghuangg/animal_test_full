// loads config.json and makes it available as window.__appConfig
async function loadConfig() {
  try {
    const res = await fetch('config.json');
    if (!res.ok) throw new Error('Config load failed: ' + res.status);
    const cfg = await res.json();
    window.__appConfig = cfg;
    return cfg;
  } catch (e) {
    console.error(e);
    window.__appConfig = null;
    return null;
  }
}
// auto-load on inclusion
loadConfig();

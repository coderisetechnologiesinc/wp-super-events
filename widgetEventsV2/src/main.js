import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { useRuntimeStore } from './api/wordpress';
import { useBookingStore } from './stores/booking';
import { fitMobileWidth } from './utilities/mobileWidth';

export function mountWidgets(parent = document) {
  parent.querySelectorAll('[data-servv-events-v2]').forEach((root) => {
    if (root.__servvApp) return;
    const node = root.querySelector('[data-servv-config]');
    const target = root.querySelector('[data-servv-app]');
    if (!node || !target) return;
    try {
      const runtime = JSON.parse(node.textContent);
      if (runtime.config.show_events_widget === false) return;
      const pinia = createPinia();
      pinia._servvRuntime = markRaw(runtime);
      const app = createApp(App);
      app.use(pinia);
      app.mount(target);
      root.__servvApp = app;
      const disposeMobileWidth = runtime.preview ? () => {} : fitMobileWidth(root);
      root.__servvDispose = () => {
        disposeMobileWidth();
        useBookingStore(pinia).close();
        useRuntimeStore(pinia).api.dispose();
        app.unmount();
        delete root.__servvApp;
      };
    } catch (error) {
      target.textContent = 'Unable to load the events widget.';
      console.error('Servv widget initialization failed', error);
    }
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => mountWidgets());
else mountWidgets();
export const mount = mountWidgets;
const observer = new MutationObserver((changes) => {
  for (const change of changes) for (const node of change.removedNodes) {
    if (node.nodeType !== 1 || node.isConnected) continue;
    node.__servvDispose?.();
    node.querySelectorAll?.('[data-servv-events-v2]').forEach((root) => root.__servvDispose?.());
  }
});
observer.observe(document.documentElement, { childList: true, subtree: true });

export const HCAPTCHA_SITEKEY = "3e18872e-19a6-4e60-b4f4-8bac3340aa24";

const CALLBACK = "svvHcaptchaReady";
const SRC = `https://js.hcaptcha.com/1/api.js?render=explicit&onload=${CALLBACK}`;

let pending = null;

export function loadHcaptcha() {
  if (window.hcaptcha) return Promise.resolve(window.hcaptcha);
  if (pending) return pending;

  pending = new Promise((resolve, reject) => {
    window[CALLBACK] = () => resolve(window.hcaptcha);

    const script = document.createElement("script");

    script.src = SRC;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      pending = null;
      reject(new Error("hCaptcha failed to load"));
    };

    document.head.appendChild(script);
  });

  return pending;
}

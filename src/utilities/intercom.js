const INTERCOM_APP_ID = "peztdh9y";

// Injects the Intercom widget loader once per page load. Returns true when the
// widget is (or is already being) booted, which is what the caller shows its
// Live Chat button on.
export const injectIntercom = () => {
  if (window.IntercomInjected) return true;
  window.IntercomInjected = true;

  window.intercomSettings = {
    api_base: "https://api-iam.intercom.io",
    app_id: INTERCOM_APP_ID,
    custom_launcher_selector: "#servv_live_chat",
  };

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.innerHTML = `
      (function () {
        var w = window;
        var ic = w.Intercom;
        if (typeof ic === "function") {
          ic('reattach_activator');
          ic('update', w.intercomSettings);
        } else {
          var d = document;
          var i = function () { i.c(arguments); };
          i.q = [];
          i.c = function (args) { i.q.push(args); };
          w.Intercom = i;
          var l = function () {
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://widget.intercom.io/widget/${INTERCOM_APP_ID}';
            var x = d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          };
          if (document.readyState === 'complete') {
            l();
          } else if (w.attachEvent) {
            w.attachEvent('onload', l);
          } else {
            w.addEventListener('load', l, false);
          }
        }
      })();
    `;
  document.body.appendChild(script);

  script.onload = () => {
    if (window.Intercom) window.Intercom("boot");
  };

  return true;
};

// Tears the widget down so injectIntercom can boot it again on the next visit.
export const shutdownIntercom = () => {
  if (window.Intercom) window.Intercom("shutdown");
  window.IntercomInjected = false;
};

// Explicit launcher: queue boot/show while the remote widget is loading.
export const openIntercomChat = () => {
  const alreadyInjected = Boolean(window.IntercomInjected);
  injectIntercom();
  window.Intercom(alreadyInjected ? "update" : "boot", {
    ...window.intercomSettings,
    hide_default_launcher: true,
  });
  window.Intercom("show");
};

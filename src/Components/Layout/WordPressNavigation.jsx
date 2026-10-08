import { useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Keep WordPress's real links for direct visits and new tabs. Within the
// mounted app, ordinary clicks use the existing HashRouter instead.
const WordPressNavigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const routes = useMemo(
    () =>
      (window.servvData?.adminRoutes || []).map(({ url, route }) => ({
        url: new URL(url, window.location.href),
        route,
      })),
    [],
  );

  useEffect(() => {
    const onClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest?.("a[href]");
      if (
        !link ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self")
      ) {
        return;
      }

      const url = new URL(link.href, window.location.href);
      const match = routes.find(
        ({ url: destination }) =>
          url.origin === window.location.origin &&
          url.origin === destination.origin &&
          url.pathname === destination.pathname &&
          url.search === destination.search,
      );
      if (!match) return;

      event.preventDefault();
      navigate(url.hash.startsWith("#/") ? url.hash.slice(1) : match.route);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate, routes]);

  useEffect(() => {
    const current = routes.find(
      ({ route }) => pathname === route || pathname.startsWith(`${route}/`),
    );
    if (!current) return;

    document.querySelectorAll("#adminmenu .wp-submenu a[href]").forEach((link) => {
      const url = new URL(link.href, window.location.href);
      const match = routes.find(
        ({ url: destination }) =>
          url.origin === destination.origin &&
          url.pathname === destination.pathname &&
          url.search === destination.search,
      );
      if (!match) return;

      const selected = match.route === current.route;
      link.classList.toggle("current", selected);
      link.closest("li")?.classList.toggle("current", selected);
      if (selected) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }, [pathname, routes]);

  return null;
};

export default WordPressNavigation;

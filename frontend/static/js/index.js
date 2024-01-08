import Home from "./views/HomeView.js";
import NotFound from "./views/NotFoundView.js";
import Experiences from "./views/ExperiencesView.js"

//  Dynamic routing with params logic

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1])
    
    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }))
}

// History API

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

// Router

const router = async () => {
  const routes = [
    { path: "/not-found", view: NotFound },
    { path: "/", view: Home },
    { path: "/experiences", view: Experiences },
    { path: "/experiences/:id", view: Experiences },
  ];

  // Test if the parameter is matching the route

  const potentialMatches = routes.map((route) => {
    return {
      route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

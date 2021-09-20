<script>
  import { Route } from "svelte-router-spa";
  import AppHeader from "./AppHeader.svelte";
  import AppFooter from "./AppFooter.svelte";
  export let currentRoute;
</script>

<AppHeader />
<main>
  <Route {currentRoute} />
</main>
<AppFooter />

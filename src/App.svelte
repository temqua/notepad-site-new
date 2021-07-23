<script>
    import { Router } from 'svelte-router-spa';
    import routes from './routes';
</script>

<Router {routes} />

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>

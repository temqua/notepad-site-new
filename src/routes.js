import Home from './views/Home.svelte';
import About from './views/About.svelte';
import NotFoundPage from './views/NotFoundPage.svelte';
import Layout from '@/components/Layout.svelte';
const routes = [
    {
        name: '/',
        component: Home,
        layout: Layout,
    },
    {
        name: '/about',
        component: About,
        layout: Layout,
    },
    {
        name: '404',
        path: '404.html',
        component: NotFoundPage,
    },
];
export default routes;

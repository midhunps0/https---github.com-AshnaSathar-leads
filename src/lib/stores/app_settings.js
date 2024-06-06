import { writable } from 'svelte/store';

export let sidebarCollapse = writable(false);
export let pageTitle = writable('Dashboard');
export let permissions = writable([]);
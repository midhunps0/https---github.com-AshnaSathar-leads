<script>
    import { sidebarCollapse } from "../stores.js";
    import Navbar from "./Navbar.svelte";
    import Sidebar from "./Sidebar.svelte";

    let collapse;
    sidebarCollapse.subscribe((v) => {
        collapse = v;
    });
</script>

<!-- <svelte:head>
    <script src="https://unpkg.com/@popperjs/core@2"></script>
</svelte:head> -->
<div class="relative flex flex-col p-0">
    <div class="absolute top-0 left-0 -z-10 h-72 bg-logoblue w-full"></div>
    <div class="flex flex-row p-0 relative">
        <div class="flex h-screen p-2 relative overflow-x-hidden transition-all box-border {collapse ? 'w-16' : 'w-64'}">
            <div class="overflow-x-hidden fixed top-0 left-0 p-2 h-screen overflow-y-auto transition-all {collapse ? 'w-16' : 'w-64'}">
                <Sidebar />
            </div>
        </div>
        <div class="flex-grow p-2 pr-4 relative">
            <Navbar />
            <slot />
        </div>
    </div>
</div>

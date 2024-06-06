<script>
    import { sidebarCollapse } from "../../lib/stores/app_settings.js";
    import Navbar from "../../lib/components/Navbar.svelte";
    import Sidebar from "../../lib/components/Sidebar.svelte";
    import Toast from "../../lib/components/Toast.svelte";
    import {toasts} from "../../lib/stores/toaststore.js";

    let toastslist;
    let collapse;

    toasts.subscribe((v) => {
        toastslist = v;
    });
    sidebarCollapse.subscribe((v) => {
        collapse = v;
    });
</script>

<div class="relative flex flex-col p-0">
    {#if toastslist.length > 0}
    <div class="absolute flex flex-col z-20 top-20 right-10" id="toast-wrapper bg-white p-3 rounded-md">
        {#each toastslist as t}
        <Toast mode={t.mode} message={t.message}/>
        {/each}
    </div>
    {/if}
    <div class="absolute top-0 left-0 -z-10 h-72 bg-logoblue w-full"></div>
    <div class="flex flex-row p-0 relative">
        <div class="flex h-screen p-2 relative overflow-x-hidden transition-all box-border {collapse ? 'w-16' : 'w-64'}">
            <div class="overflow-x-hidden fixed top-0 left-0 p-2 h-screen overflow-y-auto transition-all {collapse ? 'w-16' : 'w-64'}">
                <Sidebar />
            </div>
        </div>
        <div class="{collapse ? 'w-[calc(100%-64px)]' : 'w-[calc(100%-256px)]'} w-[calc(100%-256px)] p-2 pr-4 relative">
            <!-- <Navbar /> -->
            <slot />
        </div>
    </div>
</div>

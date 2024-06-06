<script>
    import { sidebarCollapse } from "../stores/app_settings";
    import Icon from "./Icon.svelte";
    import { icons } from "../icons";
    import { dropExpand } from "../transitions.js";
    import { checkPermissions } from "../appHelper.js"

    export let label;
    export let icon = 'squares';
    export let permissions = [];

    let expanded = false;

    let collapse;
    sidebarCollapse.subscribe((v) => {
        collapse = v;
    });
</script>

{#if checkPermissions(permissions)}
<li>
    <div class="py-2 flex justify-start items-center gap-3 text-sm text-nowrap opacity-60">
        <span class="h-6 w-6 inline-block"><Icon icon={icons[icon]}/></span>
        <span class="overflow-hidden inline-block transition-all text-left {collapse ? 'w-0' : 'w-48'}">{label}</span>
        <button on:click="{() => {expanded = !expanded;}}" class="h-6 w-6 transition-transform {expanded ? 'rotate-180' : 'rotate-0'}">
            <Icon icon={icons.chevron_down}/>
        </button>
    </div>
    {#if expanded}
    <ul class="overflow-hidden" transition:dropExpand={{ duration: 100 }}>
        <slot />
    </ul>
    {/if}
</li>
{/if}

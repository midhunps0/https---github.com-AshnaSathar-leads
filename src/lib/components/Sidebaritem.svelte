<script>
    import { sidebarCollapse } from "../stores/app_settings";
    import { checkPermissions } from "../appHelper.js"
    import Icon from "./Icon.svelte";
    import { icons } from "../icons";
    export let label = 'item';
    export let href = '/admin/dashboard';
    export let icon = 'squares';
    export let permissions = [];

    let collapse;
    sidebarCollapse.subscribe((v) => {
        collapse = v;
    });
</script>
{#if checkPermissions(permissions)}
<li>
    <a href={href} class="py-2 flex justify-start items-center gap-3 text-sm text-nowrap">
        <div class="h-6 w-6 inline-block"><Icon icon={icons[icon]}/></div>
        <span class="overflow-hidden transition-all {collapse ? 'w-0' : 'w-52'}">{label}</span>
    </a>
</li>
{/if}

<script>
    import { icons } from "../../icons";
    import Icon from "../Icon.svelte";

    export let link = '#';
    export let h = 'h-8';
    export let w = 'w-8';
    export let bg = 'bg-logoblue';
    export let fg = 'text-white';
    export let icon = 'chevron_right';
    export let active = false;

</script>
{#if active}
<a href={link} class="{h} {w} {bg} {fg} flex justify-center items-center border border-x border-white border-opacity-20 text-base {active ? 'bg-opacity-100 opacity-100' : 'bg-opacity-90 opacity-60'}">
    <span class="inline-block w-5 h-5"><Icon icon={icons[icon]} /></span>
</a>
{:else}
<span class="{h} {w} {bg} {fg} flex justify-center items-center border border-x border-white border-opacity-20 text-base {active ? 'bg-opacity-100 opacity-100' : 'bg-opacity-90 opacity-60'}">
    <span class="inline-block w-5 h-5"><Icon icon={icons[icon]} /></span>
</span>
{/if}

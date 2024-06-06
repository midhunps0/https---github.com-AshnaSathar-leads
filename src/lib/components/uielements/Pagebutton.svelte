<script>
    // import { icons } from "../../icons";
    // import Icon from "../Icon.svelte";

    export let page = '1';
    export let link = '#';
    export let h = 'h-8';
    export let w = 'w-8';
    export let bg = 'bg-logoblue';
    export let fg = 'text-white';
    export let active = false;

    // export let action = function (e) {
    //     let data = router.get(link, { preserveScroll: true });
    //     console.log(data);
    // }
</script>
<a href={'http://localhost:5173/admin/companies'+link.substring(link.indexOf('?'))} class="{h} {w} {bg} {fg} flex justify-center items-center border border-x border-white border-opacity-20 text-base {active ? 'bg-opacity-100 opacity-100' : 'bg-opacity-90 opacity-60'}">
    {page}
</a>

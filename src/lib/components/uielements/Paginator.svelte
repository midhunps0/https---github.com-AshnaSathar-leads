<script>
    import Pagebutton from "./Pagebutton.svelte";
    import Pagechange from "./Pagechange.svelte";

    export let fp_url = '#';
    export let lp_url = '#';
    export let next_url = '#';
    export let prev_url = '#';
    export let pages = [];
    export let current_page = 1;
    export let last_page = 1;
    export let from;
    export let to;
    export let total;
</script>
<div class="flex justify-between">
    <div>
        Showing {from} to {to} of {total} results
    </div>
    <div class="flex rounded-md overflow-hidden">
        <Pagechange icon="chevron_double_left" active={current_page != 1} link={fp_url}/>
        <Pagechange icon="chevron_left" active={current_page != 1} link={prev_url}/>
        {#each pages as p}
        <Pagebutton page={p.label} link={p.url} active={current_page == parseInt(p.label)} />
        {/each}
        <Pagechange icon="chevron_right"  active={current_page != last_page} link={next_url}/>
        <Pagechange icon="chevron_double_right" active={current_page != last_page} link={lp_url}/>
    </div>
</div>

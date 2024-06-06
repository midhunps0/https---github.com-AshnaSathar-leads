<script>
    import { icons } from "../../icons";
import Icon from "../Icon.svelte";

    export let h = 'h-6';
    export let w = 'w-6';
    export let bg = 'bg-logoblue';
    export let fg = 'text-white';
    export let icon = 'eye';
    export let action = function (e) {
        alert('Clicked!');
    }
</script>
<button on:click="{action}" class="{h} {w} {bg} {fg} p-1 rounded-md">
    <Icon icon={icons[icon]} />
</button>

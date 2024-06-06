<script>
    import {fade} from "svelte/transition";

    export let mode = 'success';
    export let message = '';

    function getModeClass() {
        let m = 'bg-success';
        switch(mode) {
            case 'warning':
                m = 'bg-warning';
                break;
            case 'error':
                m = 'bg-error';
                break;
            default:
                m = 'bg-success';
                break;
        }
        return m;
    }
</script>

<div transition:fade class="flex w-40 h-24 justify-center items-center { getModeClass() }">
    {message}
</div>
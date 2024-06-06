<script>
    export let label = 'info';
    export let href = '#';
</script>
<a href={href} class="flex flex-col justify-center items-center gap-y-4 px-3 py-5 shadow-md rounded-md bg-logoblue bg-opacity-10 hover:bg-opacity-100 hover:text-white transition-colors w-48 text-center border border-black border-opacity-10 font-bold">
    {label}
</a>

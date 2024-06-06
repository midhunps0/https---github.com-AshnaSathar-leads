<script>
    import Epfform from "./Epfform.svelte";
    import Esiform from "./Esiform.svelte";
    import Labourwelfarefactories from "./Labourwelfarefactories.svelte";
    import Labourwelfareshops from "./Labourwelfareshops.svelte";
    import Professionaltaxform from "./Professionaltaxform.svelte";
    let currentTab = 1;
    function setComplianceTab (e) {
        currentTab = e.target.dataset.tabno;
    }
</script>
<div class="flex flex-col h-full">
    <ul class="flex relative top-0.5 z-10">
        <li>
            <button type="button" on:click={setComplianceTab} data-tabno="1" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 1 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">ESI</button>
        </li>
        <li>
            <button type="button" on:click={setComplianceTab} data-tabno="2" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 2 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">EPF</button>
        </li>
        <li>
            <button type="button" on:click={setComplianceTab} data-tabno="3" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 3 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">Professional Tax</button>
        </li>
        <li>
            <button type="button" on:click={setComplianceTab} data-tabno="4" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 4 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">Welfare Fund (Factories)</button>
        </li>
        <li>
            <button type="button" on:click={setComplianceTab} data-tabno="5" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 5 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">Welfare Fund (Shops)</button>
        </li>
        <!-- <li>
            <button type="button" on:click={setComplianceTab} data-tabno="6" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 6 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">Minimum Wages</button>
        </li> -->
    </ul>
    <div class="flex-grow border border-black border-opacity-20 p-3 rounded-lg rounded-tl-none">
        <div class="{currentTab == 1 ? 'block' : 'hidden'}">
            <Esiform />
        </div>
        <div class="{currentTab == 2 ? 'block' : 'hidden'}">
            <Epfform />
        </div>
        <div class="{currentTab == 3 ? 'block' : 'hidden'}">
            <Professionaltaxform />
        </div>
        <div class="{currentTab == 4 ? 'block' : 'hidden'}">
            <Labourwelfareshops />
        </div>
        <div class="{currentTab == 5 ? 'block' : 'hidden'}">
            <Labourwelfarefactories />
        </div>
    </div>
</div>

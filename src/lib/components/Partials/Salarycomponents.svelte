<script>
    let currentTab = 1;
    function setSalaryTab (e) {
        currentTab = e.target.dataset.tabno;
    }
</script>
<div class="flex flex-col h-full">
    <ul class="flex relative top-0.5 z-10">
        <li>
            <button type="button" on:click={setSalaryTab} data-tabno="1" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 1 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">Earnings</button>
        </li>
        <li>
            <button type="button" on:click={setSalaryTab} data-tabno="2" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 2 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">Deductions</button>
        </li>
        <li>
            <button type="button" on:click={setSalaryTab} data-tabno="3" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 3 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">Reimbursements</button>
        </li>
    </ul>
    <div class="flex-grow border border-black border-opacity-20 p-3 rounded-lg rounded-tl-none">
        <div class="{currentTab == 1 ? 'block' : 'hidden'}">
            <h4 >Earnings</h4>
        </div>
        <div class="{currentTab == 2 ? 'block' : 'hidden'}">
            <h4 >Deductions</h4>
        </div>
        <div class="{currentTab == 3 ? 'block' : 'hidden'}">
            <h4 >Reimbursements</h4>
        </div>
    </div>
</div>

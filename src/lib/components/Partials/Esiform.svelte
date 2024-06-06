<script>
    let esiEnabled = false;
    let coContrCtc = false;
</script>
<form class="p-0" action="#">
    <div class="flex flex-col gap-y-4 py-4">
        <div class="flex-grow flex gap-x-4">
            <h4 class="font-bold">Enable ESI?</h4>
            <div class="flex gap-2">
                <input type="checkbox" bind:checked={esiEnabled} name="enable_esi" class="accent-logoblue scale-125">
                {#if esiEnabled}
                <span>Yes</span>
                {:else}
                <span>No</span>
                {/if}
            </div>
        </div>
        {#if esiEnabled}
        <div class="flex gap-x-4">
            <div class="flex-grow w-1/2">
                <h4 class="font-bold">ESI No.</h4>
                <input type="text" name="esi_no" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
            </div>
            <div class="flex-grow w-1/2">
                <h4 class="font-bold">Deduction Cycle</h4>
                <select name="deduction_cycle" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
                    <option value="">--Select One--</option>
                    <option value="">Monthly</option>
                    <option value="">Half yealry</option>
                </select>
            </div>
        </div>
        <div class="flex gap-x-4">
            <div class="flex-grow w-1/2">
                <h4 class="font-bold">Employee's Contribution</h4>
                <input type="text" name="emp_contribution" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
            </div>
            <div class="flex-grow w-1/2">
                <h4 class="font-bold">Employer's Contribution</h4>
                <input type="text" name="co_contribution" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
            </div>
        </div>
        <div class="flex-grow flex gap-x-4">
            <h4 class="font-bold">Include employer's contribution in CTC?</h4>
            <div class="flex gap-2">
                <input type="checkbox" bind:checked={coContrCtc} name="co_contr_ctc" class="accent-logoblue scale-125">
                {#if coContrCtc}
                <span>Yes</span>
                {:else}
                <span>No</span>
                {/if}
            </div>
        </div>
        {/if}
        <div class="text-center p-2">
            <button class="bg-logoorange px-4 py-2 rounded-md shadow-md text-white" type="submit">
                Save & Next
            </button>
        </div>
    </div>
</form>

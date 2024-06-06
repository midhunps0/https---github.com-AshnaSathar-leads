<script>
    let epfEnabled = false;
    let epfEldiCtc = false;
    let epfAdminCtc = false;
    let epfLopProRate = false;
    let epfLopMinGross = false;
</script>
<form class="p-0" action="#">
    <div class="flex flex-col gap-y-4 py-4">
        <div class="flex-grow flex gap-x-4">
            <h4  class="font-bold">Enable EPF?</h4>
            <div class="flex gap-2">
                <input type="checkbox" bind:checked={epfEnabled} name="enable_epf" class="accent-logoblue scale-125">
                {#if epfEnabled}
                <span>Yes</span>
                {:else}
                <span>No</span>
                {/if}
            </div>
        </div>
        {#if epfEnabled}
        <div class="flex gap-x-4">
            <div class="flex-grow w-1/2">
                <h4  class="font-bold">EPF No.</h4>
                <input type="text" name="epf_no" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
            </div>
            <div class="flex-grow w-1/2">
                <h4  class="font-bold">Deduction Cycle</h4>
                <select name="epf_deduction_cycle" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
                    <option value="">--Select One--</option>
                    <option value="">Monthly</option>
                    <option value="">Quarterly</option>
                    <option value="">Half yealry</option>
                </select>
            </div>
        </div>
        <div class="flex gap-x-4">
            <div class="flex-grow w-1/2">
                <h4  class="font-bold">Employee's Contribution</h4>
                <input type="text" name="epf_emp_contribution" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
            </div>
            <div class="flex-grow w-1/2">
                <h4  class="font-bold">Employer's Contribution</h4>
                <input type="text" name="epf_co_contribution" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
            </div>
        </div>
        <fieldset class="flex-grow flex gap-x-4 p-2 border border-black border-opacity-20 rounded-lg">
            <legend>Include employer's contribution in CTC?</legend>
            <div class="flex gap-2 pl-4">
                <h4  class="font-bold">ELID:</h4>
                <input type="checkbox" bind:checked={epfEldiCtc} name="epf_elid_ctc" class="accent-logoblue scale-125">
                {#if epfEldiCtc}
                <span>Yes</span>
                {:else}
                <span>No</span>
                {/if}
            </div>
            <div class="flex gap-2 pl-4">
                <h4  class="font-bold">Admin Charges:</h4>
                <input type="checkbox" bind:checked={epfAdminCtc} name="epf_admin_ctc" class="accent-logoblue scale-125">
                {#if epfAdminCtc}
                <span>Yes</span>
                {:else}
                <span>No</span>
                {/if}
            </div>
        </fieldset>
        <fieldset class="flex-grow flex flex-col gap-y-4 p-2 border border-black border-opacity-20 rounded-lg">
            <legend>Calculation, if LOP applied:</legend>
            <div class="flex gap-2 pl-4">
                <h4  class="font-bold">Pro-rate based on no. of days worked:</h4>
                <input type="checkbox" bind:checked={epfLopProRate} name="epf_lop_pro_rate" class="accent-logoblue scale-125">
                {#if epfLopProRate}
                <span>Yes</span>
                {:else}
                <span>No</span>
                {/if}
            </div>
            <div class="flex gap-2 pl-4">
                <h4  class="font-bold">If PF wage is less than ₹15,000 after Loss of Pay, consider all applicable salary components:</h4>
                <input type="checkbox" bind:checked={epfLopMinGross} name="epf_lop_min_gross" class="accent-logoblue scale-125">
                {#if epfLopMinGross}
                <span>Yes</span>
                {:else}
                <span>No</span>
                {/if}
            </div>
        </fieldset>
        {/if}
        <div class="text-center p-2">
            <button class="bg-logoorange px-4 py-2 rounded-md shadow-md text-white" type="submit">Save & Next</button>
        </div>
    </div>
</form>

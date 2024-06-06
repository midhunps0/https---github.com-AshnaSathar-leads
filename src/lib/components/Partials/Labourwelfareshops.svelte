<script>
    let lwsEnabled = false;
</script>
<div class="p-0" action="#">
    <div class="flex flex-col gap-y-4 py-4">
        <div class="flex-grow w-1/2">
            <h4 class="font-bold">Select Location</h4>
            <select name="pt_location" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
                <option value="">Head Office</option>
                <option value="">Chennai Factory</option>
                <option value="">Mumbai</option>
            </select>
        </div>
        <h4  class="font-bold">Contribution Details</h4>
        <div class="border border-black border-opacity-20 rounded-lg w-1/2">
            <table class="w-full table">
                <thead>
                    <tr>
                        <th class="text-left">Particulars</th>
                        <th class="text-left">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Employees Contribution</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Employer's Contribution</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Deduction Cycle</td>
                        <td>Monthly</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>
                            <div class="flex-grow flex gap-x-4">
                                <div class="flex gap-2">
                                    <input type="checkbox" bind:checked={lwsEnabled} name="enable_esi" class="accent-logoblue scale-125">
                                    {#if lwsEnabled}
                                    <span>Enabled</span>
                                    {:else}
                                    <span>Disabled</span>
                                    {/if}
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<script>
    let slabs = [
        { from: 1, to: 11999, amount: 0 },
        { from: 12000, to: 11999, amount: 120 },
        { from: 18000, to: 17999, amount: 180 },
        { from: 30000, to: 29999, amount: 300 },
        { from: 45000, to: 44999, amount: 450 },
        { from: 60000, to: 59999, amount: 600 },
        { from: 75000, to: 74999, amount: 750 },
        { from: 100000, to: 99999, amount: 1000 },
        { from: 125000, to: 9999999999, amount: 1250 },
    ];
</script>
<div>
    <form class="p-0" action="#">
        <div class="flex flex-col gap-y-4 py-4">
            <div class="flex-grow w-1/2">
                <h4 class="font-bold">Select Location</h4>
                <select name="pt_location" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
                    <option value="">Head Office</option>
                    <option value="">Chennai Factory</option>
                    <option value="">Mumbai</option>
                </select>
            </div>
            <fieldset class="fieldset flex gap-x-4">
                <legend>PT Details</legend>
                <div class="flex flex-col gap-y-4 w-1/2">
                    <div class="w-1/2">
                        <h4 class="font-bold">Professional Tax No.</h4>
                        <input type="text" name="pt_no" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md">
                    </div>
                    <div class="w-1/2">
                        <h4 class="font-bold">State</h4>
                        <input type="text" name="co_contribution" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md read-only:bg-black read-only:bg-opacity-5" readonly value="Kerala">
                    </div>
                    <div class="w-1/2">
                        <h4 class="font-bold">Deduction Cycle</h4>
                        <input type="text" name="pt_deduction_cycle" class="p-2 w-full border border-black border-opacity-20 shadow-inner rounded-md read-only:bg-black read-only:bg-opacity-5" readonly value="Half Yearly">
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 w-1/2 h-full">
                    <h4  class="font-bold">Tax Slabs</h4>
                    <div class="border border-black border-opacity-20 rounded-lg w-full h-full overflow-y-scroll">
                        <table class="w-full">
                            <thead>
                                <tr class="font-bold bg-logoblue bg-opacity-20">
                                    <th class="p-2 text-left">From</th>
                                    <th class="p-2 text-left">To</th>
                                    <th class="p-2 text-left">Amount (Rs.)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {#each slabs as s}
                                <tr>
                                    <td class="p-2">{s.from}</td>
                                    <td class="p-2">{s.to}</td>
                                    <td class="p-2">{s.amount}</td>
                                </tr>
                                {/each}
                            </tbody>
                        </table>
                    </div>

                </div>
            </fieldset>

            <div class="text-center p-2">
                <button class="bg-logoorange px-4 py-2 rounded-md shadow-md text-white" type="submit">
                    Save & Next
                </button>
            </div>
        </div>
    </form>
</div>

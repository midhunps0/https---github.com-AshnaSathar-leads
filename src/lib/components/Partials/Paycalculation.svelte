<script>
    import { icons } from "../../icons";
    import Icon from "../Icon.svelte";

    let currentTab = 1;
    let weekSchedules = [
        {name: 'Mon-Fri', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'], default: true},
        {name: 'Mon-Sat', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], default: false},
        {name: 'Sun-Fri', days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], default: false},
    ];
    function setPaycalcTab (e) {
        currentTab = e.target.dataset.tabno;
    }
</script>
<div class="flex flex-col h-full">
    <ul class="flex relative top-0.5 z-10">
        <li>
            <button type="button" on:click={setPaycalcTab} data-tabno="1" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 1 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">Week Schedules</button>
        </li>
        <li>
            <button type="button" on:click={setPaycalcTab} data-tabno="2" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 2 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">Salary Period</button>
        </li>
        <!-- <li>
            <button type="button" on:click={setPaycalcTab} data-tabno="3" class="px-4 py-2 border border-black border-b-transparent border-opacity-20 rounded-t-md {currentTab == 3 ? 'bg-white font-bold' : 'bg-black bg-opacity-5'}">Reimbursements</button>
        </li> -->
    </ul>
    <div class="flex-grow border border-black border-opacity-20 p-3 rounded-lg rounded-tl-none py-4">
        <div class="flex flex-col gap-y-4 font-bold {currentTab == 1 ? 'block' : 'hidden'}">
            <!-- <h4 >Week Schedules</h4> -->
            <div class="border border-black border-opacity-20 rounded-lg w-1/2">
                <table class="w-full table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Days</th>
                            <th>Set As Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each weekSchedules as s}
                        <tr>
                            <td>{s.name}</td>
                            <td>
                                {s.days.join(',')}
                            </td>
                            <td>
                                {#if s.default}
                                Yes
                                {:else}
                                No
                                {/if}
                            </td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
            <div class="text-right p-2 w-1/2 flex justify-end">
                <button class="bg-logoblue px-4 py-2 rounded-md shadow-md text-white flex gapy-x-4 items-center" type="submit">
                    <div class="w-4 h-4">
                        <Icon icon={icons.plus} />
                    </div>
                    <span>New</span>
                </button>
            </div>
        </div>
        <div class="{currentTab == 2 ? 'block' : 'hidden'}">
            <h4 >Deductions</h4>
        </div>
        <div class="{currentTab == 3 ? 'block' : 'hidden'}">
            <h4 >Reimbursements</h4>
        </div>
    </div>
</div>

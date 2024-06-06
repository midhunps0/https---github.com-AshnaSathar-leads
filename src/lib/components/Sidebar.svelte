<script>
    import Sidebaritem from "./Sidebaritem.svelte";
    import Sidebargroup from "./Sidebargroup.svelte";
    import Navlogo from "./Navlogo.svelte";
    import { sidebarCollapse } from "../stores/app_settings";
    import Icon from "./Icon.svelte";
    import { icons } from "../icons";

    let collapse;
    sidebarCollapse.subscribe((v) => {
        collapse = v
    });

    function setCollapse() {
        collapse = !collapse;
        sidebarCollapse.update((v) => {
            return collapse;
        });
    }

</script>
<div class="flex flex-col justify-between overflow-hidden bg-white shadow-lg rounded-lg h-full w-full">
    <div>
        <div class="p-3 mb-1">
            <Navlogo />
        </div>
        <ul class="px-2 overflow-y-scroll">
            <Sidebaritem label={'Dashboard'}/>
            <Sidebaritem label={'Leads'} href={'/admin/leads'}/>
            <Sidebaritem label={'Follow-ups'} href={'/admin/followups'}/>
            <Sidebaritem label={'Contacts'} href={'/admin/contacts'}/>

            <!-- <Sidebargroup label="Compliance Settings">
                <Sidebaritem label={'ESI'} href={'/admin/compliances/esi'}/>
                <Sidebaritem label={'Minimum Wages'}/>
                <Sidebaritem label={'Welfare Fund (Factories)'}/>
                <Sidebaritem label={'Welfare Fund (Shops)'}/>
            </Sidebargroup> -->
            <Sidebargroup label="Access Control">
                <Sidebaritem label={'Users'}/>
                <Sidebaritem label={'Roles'}/>
                <Sidebaritem label={'Permissions'}/>
                <Sidebaritem label={'Role-wise Permissions'}/>
            </Sidebargroup>
        </ul>
    </div>
    <div class="w-8 flex justify-start items-center">
        <button on:click={setCollapse} class="h-8 w-8 p-1 bg-red-400 text-white border border-white border-opacity-40 rounded-lg transition-transform {collapse ? 'rotate-180' : ''}">
            <Icon icon="{icons.chevron_double_left}"></Icon>
        </button>
    </div>
</div>

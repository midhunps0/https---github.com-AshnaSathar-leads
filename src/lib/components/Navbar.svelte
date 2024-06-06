<script>
    import { sidebarCollapse, pageTitle } from "../stores/app_settings"
    import {icons} from '../icons'
    import Icon from './Icon.svelte'
    let title = ''
    let collapse;
    sidebarCollapse.subscribe((v) => {
        collapse = v
    });
    pageTitle.subscribe((v) => {
        title = v
    });

    function setCollapse() {
        collapse = !collapse;
        sidebarCollapse.update((v) => {
            return collapse;
        });
    }
</script>
<div class="flex flex-row justify-between bg-base-100 py-3">
    <div class="flex gap-x-4 items-center text-white">
        <div class="w-8 flex justify-start items-center">
            <button on:click={setCollapse} class="h-8 w-8 bg-red-400 p-1 border border-white border-opacity-40 rounded-lg transition-transform {collapse ? 'rotate-180' : ''}">
                <Icon icon="{icons.chevron_double_left}"></Icon>
            </button>
        </div>
        <h1 class="text-lg">{title}</h1>
    </div>
    <div class="flex flex-row justify-end gap-x-4">
        <div class="text-sm w-64 bg-opacity-80 rounded-lg overflow-hidden flex flex-row bg-white items-center">
            <input type="text" class="p-2 flex-grow rounded-l-lg">
            <div class="w-10 flex justify-center items-center text-logoblue">
                <button class="h-6 w-6">
                    <Icon icon={icons.search} />
                </button>
            </div>
        </div>
        <div class="flex justify-between items-center text-white gap-4">
            <div class="h-8 w-8 opacity-85">
                <Icon icon={icons.bell} />
            </div>
            <div class="border border-white border-opacity-40 rounded-full flex flex-row gap-x-1 items-center p-1 opacity-85 shadow-sm">
                <div class="h-full flex items-center px-2">
                    User Name
                </div>
                <div class="h-8 w-8">
                    <Icon icon={icons.user} />
                </div>
            </div>
        </div>
    </div>
</div>

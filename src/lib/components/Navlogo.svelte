<script>
    import { sidebarCollapse } from "../stores/app_settings";
    import logo from '../../assets/images/logo.jpg'
    import minilogo from '../../assets/images/logo-mini.jpeg'
    let collapse;
    sidebarCollapse.subscribe((v) => {
        collapse = v;
    });
</script>
<div class="p-0 border-b flex justify-between h-14">
    <div class="h-full">
        <div class="transition-all overflow-hidden {collapse ? 'w-0 opacity-0' : 'w-32 opacity-100'}">
            <img class="max-h-10" src={logo} alt="">
        </div>
        <div class="transition-all overflow-hidden {collapse ? 'w-12 opacity-100' : 'opacity-0 w-0'}">
            <img class=" max-h-8" src={minilogo} alt="">
        </div>
    </div>
</div>

<script>
    import logoUrl from '../assets/images/logo.jpg'
    import { url, goto } from '@roxi/routify';

    let doLogin = async function (event) {
        history.pushState({}, '', $url('/admin/dashboard'));
        // window.axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
        //     let fd = new FormData(event.target);

        //     window.axios.post("http://localhost:8000/login", fd).then((r) => {
        //         // console.log(r)
        //         if (r.data.success) {
        //             history.pushState({}, '', $url('/admin/dashboard'))
        //         }
        //     }).catch((e) => {
        //         console.log(e)
        //     })
        // });
    }
</script>
<div class="flex justify-center items-center h-screen w-full">
    <div class="flex flex-row justify-center items-stretch w-full">
        <div class="w-1/2 flex justify-center items-center">
            <img src={logoUrl} alt="">
        </div>
        <div class="w-1/2 flex justify-center items-center">
            <div class="font-sans w-96">
                <div
                    class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"
                >
                    <div
                        class="text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6"
                    >
                        <h5 class="mt-2 mb-4">Sign in</h5>
                    </div>
                    <div class="flex-auto p-12 pt-0 pb-6 text-center">
                        <div class="mb-6 text-center text-slate-500">
                            <small>Or sign in with credentials</small>
                        </div>
                        <form class="text-left" on:submit|preventDefault|stopPropagation={doLogin}>
                            <div class="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    class="text-sm focus:shadow-primary-outline dark:bg-slate-850 placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="email-addon"
                                />
                            </div>
                            <div class="mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    class="text-sm focus:shadow-primary-outline dark:bg-slate-850 placeholder:text-gray-500 dark:placeholder:text-white/80 dark:text-white/80 leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-blue-500 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow"
                                    placeholder="Password"
                                    aria-label="Password"
                                    aria-describedby="password-addon"
                                />
                            </div>
                            <div class="min-h-6 mb-0.5 block pl-12 text-left">
                                <input
                                    id="rememberMe"
                                    class="mt-0.5 rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right"
                                    type="checkbox"
                                />
                                <label
                                    class="ml-1 text-sm font-normal cursor-pointer select-none text-slate-700"
                                    for="rememberMe">Remember me</label
                                >
                            </div>
                            <div class="text-center">
                                <button
                                    type="submit"
                                    class="inline-block w-full px-5 py-2.5 mt-6 mb-2 text-sm font-bold text-center text-white align-middle transition-all ease-in border-0 rounded-lg shadow-md cursor-pointer active:-translate-y-px active:hover:text-white active:text-black hover:-translate-y-px hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                                    >Sign in</button
                                >
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

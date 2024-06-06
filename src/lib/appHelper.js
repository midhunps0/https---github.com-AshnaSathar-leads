import { permissions } from "./stores/app_settings"

let allPermissions = [];

permissions.subscribe((v) => {
    allPermissions = v
})

export let checkPermissions = (requiredPermissions) => {
    if (requiredPermissions.length == 0) {
        return true
    }
    requiredPermissions.forEach((rp) => {
        if (allPermissions.includes(rp)) {
            return true;
        }
    });
    return false;
}
// 判断是否加载了零环(ZeroRing233)的dom罗宾模组
function hasDomRobinModInfo() {
    const DomRobinModInfo = window.modUtils.getMod('DomRobin');
    if (DomRobinModInfo) {
        return true;
    }
    return false;
}
window.hasDomRobinModInfo = hasDomRobinModInfo;

// 判断是否加载了更多恋人模组
function hasMoreLoveInterestsModInfo() {
    const MoreLoveInterestsModInfo = window.modUtils.getMod('More Love Interests Mod');
    if (MoreLoveInterestsModInfo) {
        return true;
    }
    return false;
}
window.hasMoreLoveInterestsModInfo = hasMoreLoveInterestsModInfo;

// 判断是否加载了动车(Eudemonism00)的NPC社交栏小头像模组
function hasNPCAvatarsModsInfo() {
    const NPCAvatarsModInfo = window.modUtils.getMod('NPC Avatars Mod') || window.modUtils.getMod('NPC Avatars Mod (SF)');
    if (NPCAvatarsModInfo) {
        return true;
    }
    return false;
}
window.hasNPCAvatarsModsInfo = hasNPCAvatarsModsInfo;
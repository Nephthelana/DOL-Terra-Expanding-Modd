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

// 判断是否加载了鲤鱼旗(koooooiCarp)的鹰宝宝模组
function hasBabyHawkModInfo() {
    const BabyHawkModInfo = window.modUtils.getMod('BabyHawk');
    if (BabyHawkModInfo) {
        return true;
    }
    return false;
}
window.hasBabyHawkModInfo = hasBabyHawkModInfo;

// 判断是否加载了鲤鱼旗(koooooiCarp)的快捷键绑定模组
function hasHotKeyModInfo() {
    const HotKeyModInfo = window.modUtils.getMod('HotKey');
    if (HotKeyModInfo) {
        return true;
    }
    return false;
}
window.hasHotKeyModInfo = hasHotKeyModInfo;

// 判断是否加载了再三棘(LooopSpiner)的日落伊甸园模组
function hasInTheEdenAfterSunsetModInfo() {
    const InTheEdenAfterSunsetModInfo = window.modUtils.getMod('日落伊甸园');
    if (InTheEdenAfterSunsetModInfo) {
        return true;
    }
    return false;
}
window.hasInTheEdenAfterSunsetModInfo = hasInTheEdenAfterSunsetModInfo;
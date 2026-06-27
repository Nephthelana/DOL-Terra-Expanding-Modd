(() => {
    const modUtils = window.modUtils;
    const logger = modUtils.getLogger();
    const modSC2DataManager = window.modSC2DataManager;

    function parseVersion(versionString) {
        return versionString.split('.').map(Number);
    }
    
    function compareVersions(vLoaded, vRequired) {
        let vl = parseVersion(vLoaded);
        let vr = parseVersion(vRequired);
        let vLength = Math.max(vr.length, vl.length);
        for (let i = 0; i < vLength; i++) {
            let num1 = vl[i] || 0;
            let num2 = vr[i] || 0;
            if (num1 > num2) return 1;
            if (num1 < num2) return 0;
        }
        return 1;
    }

    // 创建等待用户响应的函数
    async function waitForUserResponse(alertConfig) {
        return new Promise((resolve) => {
            window.modSweetAlert2Mod.fire({
                ...alertConfig,
                willClose: () => {
                    resolve();
                }
            });
        });
    }

    modSC2DataManager.getAddonPluginManager().registerAddonPlugin(
        'terraMod',
        'terraModalert',
        {
            async afterInjectEarlyLoad() {
                if (modUtils.getMod('maplebirch')) {
                    if (compareVersions(modUtils.getMod('maplebirch').version, "3.1.6") === 0) {
                        await waitForUserResponse({
							title: '苯环发现了个小问题！',
							html: `
								注意到你的<span class="orange">秋枫白桦框架模组</span><span class="red">版本过低</span>。所以为保证<span style="
									animation: 180s infinite linear lustful;
									background: linear-gradient(-90deg, #1ea44a, #1ea44a, #1ea44a, #1ea44a, #1ea44a, #d9e299);
									background-clip: text;
									-webkit-background-clip: text;
									color: transparent;
								">泰拉瑞亚拓展模组</span>的良好游玩体验，请将它更新到v3.1.6版本及以上。<br>
								<br>
								你可以从<a href="https://github.com/MaplebirchLeaf/SCML-DOL-maplebirchframework" target="_blank">【秋枫白桦框架】模组的Github页面</a>更新这个模组。下载方式请自行在模组页面知悉。<br>
								<br>
							`,
                            showCancelButton: false,
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            confirmButtonColor: '#1ea44a',
                            confirmButtonText: '知道了',
                        });
                    }
                } else if (modUtils.getMod('Simple Frameworks')) {
                        await waitForUserResponse({
							title: '苯环发现了个小问题！',
							html: `
								注意到你加载了<span class="yellow">简易框架模组</span>，而该模组在当前游戏版本<span class="red">存在影响较大的兼容性问题</span>。所以为保证游戏本体与<span style="
									animation: 180s infinite linear lustful;
									background: linear-gradient(-90deg, #1ea44a, #1ea44a, #1ea44a, #1ea44a, #1ea44a, #d9e299);
									background-clip: text;
									-webkit-background-clip: text;
									color: transparent;
								">泰拉瑞亚拓展模组</span>的良好游玩体验，请将其替换为<a href="https://github.com/MaplebirchLeaf/SCML-DOL-maplebirchframework" target="_blank">【秋枫白桦框架】模组</a>。下载方式请自行在模组页面知悉。<br>
							`,
                            showCancelButton: false,
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            confirmButtonColor: '#1ea44a',
                            confirmButtonText: '知道了',
                        });
                } else {
                    await waitForUserResponse({
						title: '苯环发现了个小问题！',
						html: `
							注意到你<span class="red">并没有加载</span><span class="orange">秋枫白桦框架模组</span>，而<span style="
								animation: 180s infinite linear lustful;
								background: linear-gradient(-90deg, #1ea44a, #1ea44a, #1ea44a, #1ea44a, #1ea44a, #d9e299);
								background-clip: text;
								-webkit-background-clip: text;
								color: transparent;
							">泰拉瑞亚拓展模组</span>的部分功能需要在该模组的支持下才能运行。所以为保证良好的模组游玩体验，请加载<span class="orange">秋枫白桦框架模组</span>。<br>
							<br>
							你可以从<a href="https://github.com/MaplebirchLeaf/SCML-DOL-maplebirchframework" target="_blank">【秋枫白桦框架】模组的Github页面</a>下载模组。下载方式请自行在模组页面知悉。<br>
							<br>
						`,
                        showCancelButton: false,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        confirmButtonColor: '#1ea44a',
                        confirmButtonText: '知道了',
                    });
                }
            }
        },
    );
})();
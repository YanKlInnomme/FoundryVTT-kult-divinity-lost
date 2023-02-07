export const registerSystemSettings = function () {
    game.settings.register("kult4e", "pausePath", {
        name: game.i18n.localize("kult4e.Settings.PauseIcon"),
        hint: game.i18n.localize("kult4e.Settings.PauseIconHint"),
        scope: "world",
        config: true,
        default: "systems/kult-divinity-lost/assets/pausebg.png",
        type: String,
        filePicker: true,
        onChange: () => window.location.reload()
    });
    game.settings.register("kult4e", "pauseOpacity", {
        name: game.i18n.localize("kult4e.Settings.Opacity"),
        hint: game.i18n.localize("kult4e.Settings.OpacityHint"),
        scope: "world",
        config: true,
        default: 50,
        type: Number,
        onChange: () => window.location.reload()
    });
    game.settings.register("kult4e", "pauseText", {
        name: game.i18n.localize("kult4e.Settings.PauseText"),
        hint: game.i18n.localize("kult4e.Settings.PauseTextHint"),
        scope: "world",
        config: true,
        default: game.i18n.localize("kult4e.Settings.Paused"),
        type: String,
        onChange: () => window.location.reload()
    });
    game.settings.register("kult4e", "pauseSpeed", {
        name: game.i18n.localize("kult4e.Settings.RotationSpeed"),
        hint: game.i18n.localize("kult4e.Settings.RotationSpeedHint"),
        scope: "world",
        config: true,
        default: "5",
        type: Number,
        onChange: () => window.location.reload()
    });
    game.settings.register("kult4e", "debug", {
        name: game.i18n.localize("kult4e.Settings.Debug"),
        hint: game.i18n.localize("kult4e.Settings.DebugHint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => window.location.reload()
    });
};



const kultLogger = (...content) => {
    const isDebugging = game.settings.get("kult4e", "debug");
    isDebugging && console.info('Kult4e |', ...content)
};

export const registerLogger = () => {
    window.kultLogger = kultLogger;
}
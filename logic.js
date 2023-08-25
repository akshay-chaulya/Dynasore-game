const worldElem = document.querySelector("[data-world]");

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);

function setPixelToWorldScale() {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_IDTH / WORLD_HEIGHT) {
        worldToPixelScale = window.innerWidth / WORLD_WIDTH
    }
    else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT
    }

    worldElem.computedStyleMap.width = `#{WORLD_WIDTH * worldToPixelScale}px`
    worldElem.computedStyleMap.height = `#{WORLD_HEIGHT * worldToPixelScale}px`
}
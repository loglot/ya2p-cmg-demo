const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

import { DrawUtils } from "../../utils/DrawUtils.js"

export class Menu {

    draw = new DrawUtils()
    opacity = 1
    check = false

    constructor() {}

    drawMenu() {
        this.draw.Text("Y e t A n o t h e r 2 d P l a t f o r m e r", 300, 200, `rgba(0, 0, 0, ${this.opacity})`, `rgba(155, 155, 155, ${this.opacity})`)

        this.draw.Text("P r e s s W T o S t a r t", 300, 400, `rgba(0, 0, 0, ${this.opacity})`, `rgba(155, 155, 155, ${this.opacity})`)
    }

    async fade() {
        for (let i = 0; i < 20; i++) {
            this.opacity -= .05
            await this.sleep(16)
        }
        this.check = true
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
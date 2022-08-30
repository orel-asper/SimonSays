import Game from './main/Game.js';
import Scoreboard from './main/Scoreboard.js';

export const svgs = [
{ name: 'Game', component: Game },
{ name: 'Scoreboard', component: Scoreboard },
]

export const findSvgByName = (id: string) => {
    let svgComponent = svgs.find(itm => itm.name === id)?.component
    return svgComponent
}
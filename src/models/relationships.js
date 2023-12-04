import Player from "./Player.js";
import Game from "./Game.js";

Game.belongsTo(Player);
Player.hasMany(Game);

export {Player, Game}


import { DataTypes } from "sequelize";
import dbConnection from "../config/db.js";

const Game = dbConnection.define("tbb_games",
{
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    startsAt: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    endsAt: DataTypes.TIME,
    score : {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    duration: DataTypes.TIME
})  

export default Game;

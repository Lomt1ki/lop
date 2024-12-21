// предполагается как общая библиотека, для создания и работы со стандартными командами в режимах (синие, красные, зомби)
// предложения и пул реквесты по улучшению библиотеки приветствуются
import { Color } from 'pixel_combats/basic';
import { Teams } from 'pixel_combats/room';

export const RED_TEAM_NAME = "Red";
export const BLUE_TEAM_NAME = "Blue";
export const Lime_TEAM_NAME = "Lime";
export const RED_TEAM_DISPLAY_NAME = "СССР";
export const BLUE_TEAM_DISPLAY_NAME = "США";
export const Lime_TEAM_DISPLAY_NAME = "Канада";
export const BLUE_TEAM_SPAWN_POINTS_GROUP = 1;
export const RED_TEAM_SPAWN_POINTS_GROUP = 2;
export const Lime_TEAM_SPAWN_POINTS_GROUP = 2;
export const BLUE_TEAM_COLOR = new Color(0, 0, 1, 0);
export const RED_TEAM_COLOR = new Color(1, 0, 0, 0);
export const Lime_TEAM_COLOR = new Color(1, 1, 0, 0);

export function create_team_blue() {
    Teams.Add(BLUE_TEAM_NAME, BLUE_TEAM_DISPLAY_NAME, BLUE_TEAM_COLOR);
    const team = Teams.Get(BLUE_TEAM_NAME);
    team.Spawns.SpawnPointsGroups.Add(BLUE_TEAM_SPAWN_POINTS_GROUP);
    return team;
}

export function create_team_red() {
    Teams.Add(RED_TEAM_NAME, RED_TEAM_DISPLAY_NAME, RED_TEAM_COLOR);
    const team = Teams.Get(RED_TEAM_NAME);
    team.Spawns.SpawnPointsGroups.Add(RED_TEAM_SPAWN_POINTS_GROUP);
    return team;
}
export function create_team_Lime() {
    Teams.Add(Lime_TEAM_NAME, Lime_TEAM_DISPLAY_NAME, Lime_TEAM_COLOR);
    const team = Teams.Get(RED_TEAM_NAME);
    team.Spawns.SpawnPointsGroups.Add(Lime_TEAM_SPAWN_POINTS_GROUP);
    return team;
}
export enum ActionType {
    SET_PICTURE = "SET_PICTURE",
    SET_PICTURE_ON_PAGE = "SET_PICTURE_ON_PAGE",
    SET_TWO_WEEKS_PICTURES = "SET_TWO_WEEKS_PICTURES"
};

export type Action = {
    type: ActionType,
    body: any
}
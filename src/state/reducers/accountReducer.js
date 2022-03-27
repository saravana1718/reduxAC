export const reducer = (state = 0, action) => {

    switch (action.type) {
        case "deposit":
            return state + action.payload;
        case "widhraw":
            return state - action.payload;
            case "userChanged":
                return state=0;
        default:
            return state
    }
};

export const user = (state = "plese enter name", action) => {

    switch (action.type) {
        case "userChanged":
            return action.payload;
            case " ":
                return state

        default:
            return state
    }
};

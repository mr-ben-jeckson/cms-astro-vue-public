// Define your state types
export interface State {
    token: string | null;
    user: {} | null;
}

// Define the initial state
const state: State = {
    token: null,
    user: null,
};

export default state;

export const Routes = {
    HOME: {
        path: '/',
        name: 'Home',
    },
    CHARACTER: {
        path: 'information/characters',
        name: 'Character',
    },
    LOCATION: {
        path: 'information/locations',
        name: 'Location',
    },
}

export interface Route {
    path: string;
    name: string;
}
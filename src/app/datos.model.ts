class userInfo {
    name: string;
    title: string;
    img: string;
    description: string;
}

class actions {
    title:string;
}

class results {
    title:string;
    value:number;
}

class user {
    userInfo: userInfo;
    actions: actions[];
    results: results[];
}

export interface Datos{
    user;
}
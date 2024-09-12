const authMiddleware = async (path: string, token: string) : Promise<void> => {
    const disabledPath = ["auth/login", "auth/register"];
    if(token && disabledPath.includes(path)) {
        window.location.href = "/";
    }
};

export default authMiddleware;

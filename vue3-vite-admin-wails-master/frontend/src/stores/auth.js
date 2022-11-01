export const authenticated = "Authenticated"

//登入
export function login(v) {
    window.localStorage.setItem(authenticated, v)
}

//退出
export function logout() {
    window.localStorage.removeItem(authenticated)
}

//登入状态
export const isAuthenticated = ()=>{
    let item = getAuthenticated();
    return item !== null && item !== '' && item !== undefined
}

//获取
export const getAuthenticated = () => {
    return window.localStorage.getItem(authenticated);
}

//认证
export const authMap = {}
authMap[authenticated] = getAuthenticated()

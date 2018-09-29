
import http from '@/common/http'

/**
 * 登录
 */
export const login = data => http.post("/api/user/login/test", data)


/**
 * 注册
 */
export const register = (data) => {
    let new_data = {
        userName: data.name,
        password: data.pwd
    }

    new_data.time = new Date()

    return http.get("/api/user/register/test", new_data)
}

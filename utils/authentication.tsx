import { Cookies } from 'react-cookie'
import { NextPageContext } from 'next'

const cookies = new Cookies()

export async function handleAuthentication(ctx: NextPageContext) {
    let token = null
    if (ctx.req && ctx.req.headers.cookie) {
        token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    } else {
        token = cookies.get('token')
    }

    if (ctx.res) {
        if (!token) {
            if (ctx.pathname !== '/login') {
                ctx.res.writeHead(302, {
                    Location: '/login'
                })
                ctx.res.end()
            }
        } else if (ctx.pathname === '/login') {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        }
    }
}

export const isLoggedIn = () => {
    return cookies.get('token') == 'fake-auth'
}

export const signIn = () => {
    cookies.set('token', 'fake-auth')
}

export const signOut = () => {
    cookies.remove('token')
}

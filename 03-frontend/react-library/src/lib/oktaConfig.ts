export const oktaConfig = {
    clientId: '0oa9jtplnoreYnKmM5d7',
    issuer: 'https://dev-16744632.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
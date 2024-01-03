const Router = require("koa-router");
const router = new Router();

const login = require("./login");

router.get("/login/X", async (ctx, next) => {
  try {
    const requestToken = await login.getRequestToken(ctx);
    // 保存请求令牌
    ctx.state.requestToken = requestToken;
    // 重定向到授权 URL
    // ctx.redirect(data.oauth_callback);
    ctx.status = 200;
    ctx.body = response;
  } catch (e) {
    console.log("error: ", e.toString());
  }
});

router.get("/oauth/callback/X", async (ctx, next) => {
  const queryParameters = ctx.request.query;
});

module.exports = router;

/**
 * @typedef {Object} Env
 */

export default {
  /**
   * @param {Request} request
   * @param {Env} env
   * @param {ExecutionContext} ctx
   * @returns {Promise<Response>}
   */
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    console.log(`Hello ${navigator.userAgent} at path ${url.pathname}!`)

    if (url.pathname === "/api") {
      // You could also call a third party API here
      // const data = await import("./data.js")
      return Response.json({})
    } else if (url.pathname === "/mono-clash-config") {
      const data = await fetch(
        "https://connect.applecross.link/clash/861692/CJ1FLF2u9nzp",
        {
          headers: {
            "user-agent": "shadowrocket/4.4",
          },
        },
      )
      // console.log(await data.text())
      return data
    }
    return new Response("welcome", {
      headers: {
        "content-type": "text/html",
      },
    })
  },
}

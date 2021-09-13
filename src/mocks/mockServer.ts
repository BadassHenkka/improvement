import {
    setupWorker,
    rest,
    DefaultRequestBody,
    MockedRequest,
    RestHandler,
} from 'msw'

/*
https://mswjs.io/docs/

Create mock REST responses for restHandlers array

Then use the mockServer where needed like so:
...
import mockServer from 'mocks/mockServer'

mockServer.start()
...

You can pass in options as an object to the start() method. A couple of useful ones:

// onUnhandledRequest - Specify how to handle a request that is not listed in the request handlers
// Pre-defined behaviors:
"bypass" Performs an unhandled request as-is (no warnings in console).
"warn"   Produces a warning in the browser's console (default).
"error"	 Produces an error in the browser's console.

worker.start({
  onUnhandledRequest: 'bypass',
})

// Disable the logging of matched requests in a browser's console
mockServer.start({
    quiet: true,
})

Check docs for more - https://mswjs.io/docs/
*/

export const restHandlers: RestHandler<MockedRequest<DefaultRequestBody>>[] = [
    rest.get('api.example.com/hello', (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                hello: 'hello',
            }),
            ctx.delay(150)
        )
    }),
    rest.get('api.example.com/world', (_, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                world: 'world',
            }),
            ctx.delay(150)
        )
    }),
]

const mockServer = setupWorker(...restHandlers)

export default mockServer

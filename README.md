# Standalone library test

## Prerequesites

Make sure you have [yalc](https://www.npmjs.com/package/yalc) installed globally:

```shell
npm install -g yalc
```

## How to link to webapp

1. Install dependencies: `npm install`
2. Publish the app to yalc: `yalc publish` (This only "publishes" locally)
3. In the consuming app (web-app) add the published app via yalc: `yalc add @transcarent/standalone-library-test`
4. Run this locally and run web-app locally: `npm run dev` (the same command for both)
5. Make changes in this app and see them updated live in web app.
6. Yalc modifies the package.json and package-lock.json files in the consuming app. So when you are done linking and developing locally, you'll want to remove the package.json changes. You can do this by removing the yalc installation in the consuming app (web-app): `yalc remove @transcarent/standalone-library-test

Whenever you make changes in this app, those changes will then be rebuilt and pushed to all of the yalc installations. Combined with the changes in webapp in the following pr: https://github.com/transcarent/web-app/pull/8184 you'll get a smooth development experience with fast refresh for react.

### Routing

This app is basically a plain react app with client side routing. No file based routing, and no knowledge of next.js. All wrapped up in a single component. In this case the component is `TestLib`.

This doesn't work without any interop or shimming however. We need to update the next.js app (web-app) in order to use [optional catch-all segments](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments). You can see that [here](https://github.com/transcarent/web-app/pull/8184/files#diff-d324ee23b74ab2789b261277a30b66bf866bdff152669deb87a0379f8da11525), where we renamed an `index.tsx` file to `[[...params]].tsx` file. Doing this makes next.js route all subsequent route segments back to that top level route segment where the catch-all segment is defined. This catch-all is also where we mount this app component, and where this app component will take over and handle all routing for all subsequent route segments.

One issue that we run into is when trying to route out of this app component to another route segment that is contained within web-app but not a route segmenet contained within this component. We use a client side router ([wouter](https://github.com/molefrog/wouter/tree/v3)) and that provides us with a `Link` compobebt and programmatic routing capabilities via hooks (`useLocation`) but when we attempt to route to a route that is outside of this app component's routes, nothing happens. This is because the `Link` component provided by `wouter` will only navigate within the context of `wouter`. This is where [`ExternalLinkContext`](src/components/ExternalLink.ts) and [`ExternalNavigationContext`](src/components/ExternalNavigation.ts) come in. This allows us to customize behavior when routing to external routes and use nextjs components and callbacks. We can pass in `FNLink` and `router.push` from webapp as part of the top level config. That way external routing will be known by webapp/nextjs. while internal routing will be handled by this app.

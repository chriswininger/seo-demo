SEO-Demo
=============

## The Problem

React apps and spas, in general, pose a challenge for Search Engine Optimization as well social
media content previewing.

Both of these operations rely on sites providing, at a minimum, good context specific meta-data. For
less sophisticated web-crawlers, anything but google, you also need to provide a fully rendered html
page if want to have any hope of your site being properly indexed.

Unfortunately a typical Spa serves the same content at all paths. The content is simply a mostly empty
html page. All rendering then happens after the server response on the client.

This means that link to http://my-cool-site.com/blogs/my-thoughts-on-cats that you post to social media is not going to
render as a nice captioned box with a cat picture or company logo as it were. It it will just but an ugly html link.

## What is being tried here

The folks at create-react-app are aware of this issue and [suggest using server side string replacement to get around the
problem](https://create-react-app.dev/docs/title-and-meta-tags/)

I gave this a go using nginx sub_filters

The index.html has placeholder string like `__OG_TITLE__`
It gets replaced in nginx with a rule like `sub_filter "__OG_TITLE__" "Component Page";` applied to the correct "location".

## Limitations of this approach

* It does not set the meta data for client side routing; so while this may set the OG_TITLE correctly if you click a
  direct link to a particular page, it will not set it if you arrive through site navigation using the SPA framework :-(

* It appears to have dynamic content for various pages you have to maintain a separate routing structure in nginx config;
  so, anytime you update your routes in React, you have to remember to go update the routes in nginx as well for the
  correct meta-data to be applied

* Inserting dynamic metadata driven by data fetched for the page is likely impossibly. Best case you could mine information
  from the url, but that feels like a maintenance not to mention security nightmare.
  
* It's also worth noting that while this attempts to solve the problem of providing meta-data to crawlers and social media
  platforms, it does nothing to solve the broader issue of rendering the content. Many crawlers will not be able to parse
  more than your meta-data. There is no possible performance gains either as can supposedly be achieved with true React
  Server Side Rendering

## Conclusion

I think this is a deadend :-(

## What's "Next"

I think at this point it would really be best to look at NextJs. I could try a similar approach using nodeserver rather
than nginx, but I don't really want a bespoke solution. This is not my first rodio with maintaing a coplex Node backend
service; so, I know it can be done, but if we're going that route I'd rather leverage something like NextJs.

It's worth mentioning Gatsby as another alternative, but it relies on pre-rendering static pages, which doesn't feel very
realistic for the dynamic nature of the site under development.

## Prerequisites

* docker
* node/npm (I ran on node v10.22.0)
* I highly recommend installing node using `nvm` if you do not already have a suitable version installed

## Running

`npm instsall`
`npm start:docker` this should do all the things

## Resources

* [What will it look like on Twitter?](https://cards-dev.twitter.com/validator)
* [Create-React-App SEO Suggestions](https://create-react-app.dev/docs/title-and-meta-tags/)
* [Keycloak with SSR](https://github.com/react-keycloak/react-keycloak#ssr)
* [Discussion of NextJs vs ...](https://spectrum.chat/react/general/hand-rolled-ssr~463ac88a-0bf9-4df6-9636-4050103eb94a)
* [Blog Post on SPA SEO](https://yalantis.com/blog/search-engine-optimization-for-react-apps/)
* [Role Your own RSC Vid](https://youtu.be/NwyQONeqRXA)

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

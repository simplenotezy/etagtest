# My issue:
If you run `wrangler dev` and check in the response, the `etag` will be null. However, if you try on the playground, it is not: https://cloudflareworkers.com/#7ca14685a23bf7bc32150dddfe34a912:https://www.example.com/

![not null in playground](https://github.com/simplenotezy/etagtest/blob/master/playground-not-null.jpg)
![null when deployed](https://github.com/simplenotezy/etagtest/blob/master/wrangler-dev-null.jpg)

# 👷 `worker-template` Hello World

A template for kick starting a Cloudflare worker project.

[`index.js`](https://github.com/cloudflare/worker-template/blob/master/index.js) is the content of the Workers script.

#### Wrangler

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate projectname https://github.com/cloudflare/worker-template
```

Further documentation for Wrangler can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

# video-downloader-chrome
📹⏬ An extension for google chrome to download videos from Instagram website.


### How to use
video-downloader-chrome requires [Chrome](https://www.google.com/intl/pt-BR/chrome/) to run.

Clone the repository and run on Chrome.

```sh
$ git clone https://github.com/salmomascarenhas/video-downloader-chrome.git
```

In Chrome browser, go to chrome://extensions page and switch on developer mode. This enables the ability to locally install a Chrome extension.

<img src="https://cdn-images-1.medium.com/max/1600/1*OaygCwLSwLakyTqCADbmDw.png" />

Now click on the `LOAD UNPACKED` and browse to `[PROJECT_HOME]` ,This will install the Chrome extension.

### How to works

When playing any instagram video (or similar requests), the extension will capture the link of each video by request.

Taking the data to the "closest" and visible to the user, which is the popup.html.

To show with a ```alert();``` all the urls captureds, click on the icon.

Read more about how chrome extensions work in the [documentation](https://developer.chrome.com/extensions/overview).

### Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/salmomascarenhas/video-downloader-chrome.

### Todos

 - Add feature to show the urls
  --Add functionality that shows the URLs captured content.js in popup.js (when the user clicks).
 - Free to create
 
 ### License

The repo is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

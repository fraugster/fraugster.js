<h1>Fraugster.js</h1>
<p>
	<a href="https://github.com/fraugster/fraugster.js/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2-blue.svg"></a>
</p>

---

Fraugster.js is a browser-side JavaScript library. This library can be used to
collect browser fingerprinting information that can be later submitted to
the Fraugster API.

## Getting Started

The script should be included in the page of your site where you want to collect
the browser information. Once it is loaded it will define a global `Fraugster`
object that namespaces its functionality.

```html
<script src="https://js.fraugster.com/v1/fraugster.js" integrity="sha384-O7lnJ9bjAd27tldfPpHwEGn4o3dnqPNUiLOpna4EoC+24Eah6OhoMvNVY8Q2ubkf" crossorigin="anonymous"></script>
```

The script should be loaded directly from the indicated URL instead of being
bundled with the application.

### Collecting Browser Information

Use `Fraugster.browserInfo()` to collect a `BrowserInfo` object that can be
submitted to the Fraugster API.

```javascript
var info = Fraugster.browserInfo();
```

## Attributes Collected

| Attribute         | Description                              |
| ----------------- | ---------------------------------------- |
| `user_agent`      | Full user agent string                   |
| `cookies_enabled` | Whether cookies are enabled              |
| `java_enabled`    | Whether java is enabled                  |
| `language`        | Preferred language                       |
| `plugins`         | List of plugins installed                |
| `timezone`        | Configured timezone                      |
| `timezone_offset` | Configured timezone offset               |
| `do_not_track`    | Whether do-not-track is enabled          |
| `platform`        | Platform on which the browser is running |
| `geo_supported`   | Whether geolocation is supported         |
| `screen_width`    | Width of the screen                      |
| `screen_height`   | Height of the screen                     |
| `screen_depth`    | Color depth of the screen                |
| `logical_cores`   | Number of logical cores of the device    |


## Contributing

If you want to contribute to this repository, please read the short [CONTRIBUTING.md](CONTRIBUTING.md)
guide first.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository][tags].

## Authors

- **Stefan Warman** - *Migrate code to github* - [warmans](https://github.com/warmans)

See also the list of [contributors](contributors) who participated in this project.

## License

This project is licensed under the Apache-2 License - see the [LICENSE](LICENSE) file for details.

[tags]: https://github.com/fraugster/fraugster.js/tags

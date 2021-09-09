# Fraugster.js

Fraugster.js is a browser-side JavaScript library. This library can be used to
collect browser fingerprinting information that can be later submitted to
the Fraugster API.

## Including Fraugster.js

The script should be included in the page of your site where you want to collect
the browser information. Once it is loaded it will define a global `Fraugster`
object that namespace its functionality.

```html
<script src="https://js.fraugster.com/v1/fraugster.js" integrity="sha384-O7lnJ9bjAd27tldfPpHwEGn4o3dnqPNUiLOpna4EoC+24Eah6OhoMvNVY8Q2ubkf" crossorigin="anonymous"></script>
```

The script should be loaded directly from the indicated URL instead of being
bundled with the application.

## Collecting Browser Information

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

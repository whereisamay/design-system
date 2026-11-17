# PhotoCarousel

A swipeable square photo strip with numbered captions, used in travel stories.

**Markup:** `.photo-carousel` > `.photo-carousel-track` > `figure.photo-carousel-slide`s (each with `.photo-carousel-media` and a `.photo-carousel-caption` holding a `.photo-carousel-num`), then `.photo-carousel-controls` with two `.carousel-btn[data-dir]` and an empty `.photo-carousel-dots`.

**Behaviour:** `AmayDS.initCarousels()` builds the dots, wires the buttons and disables them at the ends. Swipe works natively through scroll snap.

- 5px `ink` frame, `radius-lg`, max 320px wide.
- Captions sit on a dark fade, with the number in italic `mustard`.
- The preview uses the headshot and an empty `mustard-2` slide as stand-ins for travel photos.

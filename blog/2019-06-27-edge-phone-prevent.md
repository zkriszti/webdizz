---
title: To phone or not to phone? Stop Edge from automatically converting numbers to call links
date: 2019.06.30
meta-message: this is a repost from my old blog (June 2017)
blog-image-path: '././media/phone-booth.jpg'
blog-image-credit: 'Photo by Pedro Ramos on Unsplash'
---
I'm a Windows user (at least, at the moment) but I have always felt a strong aversion to its "I know better what you want, I'm waaaaaay smarter than you"-way of handling things. Also, it has been ages that I had last used MS's browsers like IE or Edge for actual browsing - indeed, I am only using them now to test if the pages I am building are displaying right. IE has traditionally been criticized by developers for not correctly implementing W3C standards and thus forcing us to apply hacky workarounds sometimes. With Edge, this state seems to be changing, but their solution of automatically converting numbers to phonable links was not the best innovation, I dare say. I understand the underlying usability concept, but such a solution most probably breaks the design, let alone the fact that not all numbers are intended to be phone numbers by content creators.

Long story short, luckily there's a short fix for this problem. To whichever tag you want to stop the behaviour for, you just add the following attribute:

`x-ms-format-detection="none"`

I have applied it to the `<body>` tag to disable the feature globally. Then, for the numbers that you still want to convert to actual phoneable links, just apply an `<a>` tag with the protocol "tel":

    <a href="tel:+36.........">
      CALL US [or your actual phone number]
    </a>

and then apply a simple CSS rule to override the default link styling, if necessary.

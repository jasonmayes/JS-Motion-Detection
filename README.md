# JS-Motion-Detection
A simple, fast, and lightweight (just 531 bytes gzipped when minified using Google Closure compiler) motion revealing algorithm using the live webcam feed. Live demo here: https://codepen.io/jasonmayes/pen/IrwHG

## What is this?

I was trying to devise a super sensitive motion revealing algorithm which was fairly robust against small changes in lighting etc which was capable of running in a fast manner on desktop and mobile devices.

A picture is a thousand words, and a GIF is a thousand images, so check this out for what it outputs:
![motion-detection-javascript](https://cloud.githubusercontent.com/assets/4972997/23983088/1b8a3856-09cf-11e7-8836-3be8245e4678.gif)

The nice thing about the result is that all non moving pixels converge to a neutral grey colour. Any changes are darker / lighter than that neutral grey colour. Larger shifts leads to greater contrast.

As you may have guessed, this is a visual tool primarilly to show the isolated movement in a visual way. You could of course take this and use that output to highlight the moving segments but that would require a bit more coding (basically mark all "changed" pixels and then "flood fill" those to extract a bounding box.

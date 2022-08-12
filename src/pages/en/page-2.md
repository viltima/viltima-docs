---
title: Mobile 
description: Installation and common issues
layout: ../../layouts/MainLayout.astro
---

If you ran or are running into issues from time to time, try to solve them with these tips and tricks here.
- Can't find your issue? Head to the [Support here]()

## Installation 
> Android 

Run the following command
```
$ expo build:android 
```

When you build your app, you will get a new APK file.

You need to have the Android platform tools installed along with adb, then just run `adb install app-filename.apk` with [USB debugging enabled on your device](https://developer.android.com/studio/run/device#device-developer-options) and the device plugged in.

<hr>

> iOS

Run the following command
```
$ expo build:ios 

// or 

$ expo build:ios -t simulator
```

To run it on your iOS simulator, first build your project with the simulator flag. 

Then download the artifact with the link printed when your build completes. 
To install the resulting `tar.gz` file, unzip it and drag and drop it into your iOS simulator. 

If you'd like to install it from the command line, run `tar -xvzf your-app.tar.gz` to unpack the file, open a simulator, then run `xcrun simctl install booted <path to .app>`.

To test a device build with Apple TestFlight, download the `.ipa` file to your local machine. 
Within App Store Connect, click the plus icon and create a New App. 
Make sure your bundleIdentifier matches what you've placed in app.json. 

Now, you need to use Xcode or Transporter (previously known as Application Loader) to upload the `.ipa` you got from `expo build:ios`. Once you do that, you can check the status of your build under Activity. Processing an app can take 10-15 minutes before it shows up under available builds.

## Troubleshooting
> Android

Version:
- At least Android v11+ is required.

<hr>

> iOS

Version:
- At least iOS v13+ is required.
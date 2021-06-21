---
title: 'How to Jailbreak Your Audible Audiobooks on Linux'
date: 'June 21st, 2021'
description: 'A guide on converting .aax files and removing the pesky DRM'
---

# How to Jailbreak Your Audible Audiobooks on Linux

Ahoy mateys! On every pirates journey, he finds himself wondering... _How can I secure me booty?_

In this case, our booty being audiobooks purchased on Amazon's Audible service. We can download them, sure. But they come as **aax** files, an "ehanced" version of an **aa** file format, that come equipped with **Digital Rights Management** (DRM). DRMs prevent you from truly owning and securing your audiobook, as it allows Amazon to control how and where you can use the files that you thought you purchased control of.

There are many free, open source tools that allow you to remove the DRM from aax files. This article explores one of those options. I run Linux, so if you're on the techno-facsist platforms of Microfsoft or Apple.... Well, I can write an article on how to switch to Linux if you want.

The tools I'll be using:

- [audible-activator](https://github.com/inAudible-NG/audible-activator)
- [AAXtoMP3](https://github.com/KrumpetPirate/AAXtoMP3)

## Installing the pre-requisites.

I needed: Python3, pip, mediainfo, chromedriver, chrome, and the python pkgs selenium and requests. So yeah, lots. You may already have some of these dependencies installed.

Let's get started with the stuff we can install from the apt repos.

```shell
sudo apt install mediainfo python3 pip
```

And now that we have pip...

```shell
pip install --user requests
pip install --user selenium
```

The **chromedriver** can be [downloaded here](https://sites.google.com/a/chromium.org/chromedriver/downloads). Make sure to download a version that supports the Chrome version you'll be installing. I accidentally downloaded ver92 and it wasn't compatible with the chrome I'd installed [from here](https://www.google.com/chrome/). Make sure they match.

Cool, we'll unzip the chromedriver in a second. First, let's get the **audible-activator** that I linked to above.

## audible-activator

After you've downloaded the zip of audible-activator, extract it to wherever you'd like to store it. In my case `~/Apps` is where it'll reside. Open that folder in your terminal.

Now it's time to extract the **chromedriver** to the audible-activator folder. You can do this with your GUI, or via cmd line.

```shell
cd ~/Downloads
unzip chromedriver_linux64.zip -d ~/Apps/audible-activator
```

Make sure to unzip it to the correct directory, wherever you set it up.

Now, from the terminal run the audible-activator.

```shell
python3 ./audible-activator.py
```

It'll ask you for your username and password, and then if there's no errors, it'll spit out a short string that it calls **activate_bytes**. Take that string and store it in a new file `~/.authcode`.

```shell
echo -e "YOUR_AUTH_CODE"
```

This config file will be used by **AAXtoMP3**. Otherwise, you'll have to input the authcode manually each time.

## AAXtoMP3

It's time to convert some AAX files! Head over to audible.com and download your booty, whichever books you'd like to pry from Amazon's filthy-grubby, cold, dead hands.

Dowload the zip file from AAXtoMP3s github, linked above, and extract it wherever. I put it in `~/Apps` once again, and then opened that folder in a terminal.

To see the options:

```shell
./AAXtoMP3 -h
```

It's time to convert! Here's an example of AAXtoMP3 in use:

```shell
./AAXtoMP3 --level 4 -e:mp3 --target_dir ~/Audiobooks ./ik.aax
```

Looks complicated, eh? It's not too bad. **--level 4** defines our compression level, **-e:mp3** sets our output to mp3, **--target_dir ~/Audiobooks** sets the output folder, and **./ik.aax** is the path to my audiobook aax file that I'd like to convert. That's it! When it's done, you should now have a new folder in your export directory with the converted files! Yippee! Fuck you Amazon!

The **interactive version** of AAXtoMP3 is also available. You'll have to make the file interactiveAAXtoMP3 executable first.

```shell
chmod +x ./interactiveAAXtoMP3
```

And now you can run it:

```shell
./interactiveAAXtoMP3
```

## Optional dependencies

There may be other dependencies, necessary and optional, that'll need to be installed. MP3 conversion worked out of the box for me, but it may not for you. m4b on the other hand, required **mp4v2-utils**, which I didn't yet have. Fortunately, the program will alert you of the missing dependencies and give you instructions for installing them.

### mp4v2-utils

If you're not using Bionic (Ubuntu version 18), then you'll need to add the Bionic repository to your source list at _/etc/apt/sources.list_ or _/etc/apt/sources.list.d_.

`deb http://_cz.archive.ubuntu.com/ubuntu_ bionic main universe`

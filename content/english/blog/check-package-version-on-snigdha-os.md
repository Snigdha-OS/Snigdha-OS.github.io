---
title: "How to check package version on Snigdha OS?"
meta_title: "How to check package version on Snigdha OS?"
description: "How to check package version on Snigdha OS?"
# date: 2024-04-14T05:00:00Z
# image: "/images/snigdhaos-versioning.png"
categories: ["Information"]
author: "Eshanized"
tags: ["version"]
draft: false
---

## What is Package Version?
A package version refers to a specific release of a software package or library. It is a unique identifier that allows users and systems to distinguish one version of the software from another. Package versions are typically represented using a combination of numbers and possibly letters or other characters, following a specific format.

Here are some common components of a package version:

**Major Version**: This is the primary version number and is incremented when significant, usually backward-incompatible changes are made to the software. For example, moving from version 1 to version 2 indicates a major update with potentially substantial changes.

**Minor Version**: The minor version number is incremented for smaller updates that may include new features or enhancements but do not introduce significant changes that would break compatibility with existing code. For example, going from version 1.0 to 1.1 signifies a minor update.

**Patch Version**: Also known as the maintenance or revision number, the patch version is incremented for releases that primarily address bugs, security vulnerabilities, or other issues without introducing new features. For example, moving from version 1.1.0 to 1.1.1 indicates a patch release.

**Pre-release and Build Metadata**: Some package versions include additional information such as pre-release identifiers (e.g., alpha, beta, rc for release candidates) or build metadata (e.g., a timestamp or commit hash) to provide further context about the version. These components typically appear after the main version number and are separated by hyphens or other delimiters.

{{< notice "Example" >}}

A package version might look like this: `2.1.0-beta.1+20220315`.

In this version:
- Major version: 2
- Minor version: 1
- Patch version: 0
- Pre-release identifier: beta.1
- Build metadata: 20220315
{{< /notice >}}

> Package versions are crucial for software development, deployment, and dependency management. They allow developers to communicate changes effectively, ensure compatibility between different versions of software components, and track which version of a package is installed in a system or project. Various versioning schemes exist, and different projects may follow different conventions, but the underlying purpose remains the same: to provide clear and unambiguous versioning for software packages.

## Checking package version
To find out an installed package(Eg. Visual Studio Code) version in Snigdha OS, run the following command:
```bash
sudo pacman -Q visual-studio-code-bin
```
or
```bash
q visual-studio-code-bin
```

{{< notice "Output" >}}
```bash
visual-studio-code-bin 1.88.1-1
```
{{< /notice >}}

If you want in depth then execute the following in the terminal:
```bash
sudo pacman -Qi visual-studio-code-bin
```
or
```bash
qi visual-studio-code-bin
```

{{< notice "Output" >}}
```bash
Name            : visual-studio-code-bin
Version         : 1.88.1-1
Description     : Visual Studio Code (vscode): Editor for building and debugging
                  modern web and cloud applications (official binary version)
Architecture    : x86_64
URL             : https://code.visualstudio.com/
Licenses        : custom: commercial
Groups          : None
Provides        : code  vscode
Depends On      : libxkbfile  gnupg  gtk3  libsecret  nss  gcc-libs  libnotify
                  libxss  glibc  lsof  shared-mime-info  xdg-utils  alsa-lib
Optional Deps   : glib2: Needed for move to trash functionality [installed]
                  libdbusmenu-glib: Needed for KDE global menu [installed]
                  org.freedesktop.secrets: Needed for settings sync [installed]
                  icu69: Needed for live share
Required By     : None
Optional For    : None
Conflicts With  : code
Replaces        : None
Installed Size  : 361.31 MiB
Packager        : Garuda Builder <team@garudalinux.org>
Build Date      : Sat 13 Apr 2024 08:41:36 PM IST
Install Date    : Sun 14 Apr 2024 05:52:35 AM IST
Install Reason  : Explicitly installed
Install Script  : Yes
Validated By    : SHA-256 Sum  Signature
```
{{< /notice >}}
#!/bin/bash

# Author: Eshan Roy (Eshanized)

BRANCH=master
CMSG="⏳ @eshanized updated the Website!!!"

git add .
git commit -m "${CMSG}"
git push origin "${BRANCH}"
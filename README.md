# delayedpuberty.babymri.org website

## Overview

This repo contains some basic web pages for the placenta.babymri.org site.

It is a polymer web starter kit project: https://github.com/PolymerElements/polymer-starter-kit

#### Prerequisite and workflow
See Prerequisite and Dev. Workflow https://github.com/PolymerElements/polymer-starter-kit.
### Edit content
To modify the content, edit:
  
    app/index.html

To add a new page, you need to modify

    app/index.html
    app/elemments/elements.html

Previous html pages can be found at:

    content

### Deploy

    gulp
    
Then push the content of the "dist" directory to gh-pages or to wherever you want to serve the website from.

### Steps in detail

    $> git clone https://github.com/FNNDSC/delayedpuberty.babymri.org.git
    $> cd delayedpuberty.babymri.org
    $> npm install
    $> bower install
    $> gulp serve (to run local server)
    $> gulp (to build)

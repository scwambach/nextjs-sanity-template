![NextJS_Sanity_Template](https://user-images.githubusercontent.com/8299237/211938271-0e6a0c19-0d69-4891-940c-72f6579dcf3b.png)

This template is designed to speed up setup time for setting up a website with [NextJS](https://github.com/vercel/next.js) as a frontend and [Sanity](https://www.sanity.io) as a backend.

# [Demo Site](https://scw-nextjs-sanity-template.vercel.app/)

## TODO's
- [ ] How-To for setting up nodemailer in the README
- [ ] How-To for getting the remaining env vars after the deploy
- [ ] Add preview for entire sites content

---
## Table of Contents
- [Demo Site](#demo-site)
  - [TODO's](#todos)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
  - [Local Setup](#local-setup)
    - [Install Homebrew (if you need to)](#install-homebrew-if-you-need-to)
    - [Install NVM (if you need to)](#install-nvm-if-you-need-to)
    - [Install Node.js (if you need to)](#install-nodejs-if-you-need-to)
    - [Install Yarn (if you need to)](#install-yarn-if-you-need-to)
    - [Install Root Level Packages](#install-root-level-packages)
    - [Install Sanity Studio](#install-sanity-studio)
    - [Install Sanity CLI](#install-sanity-cli)
    - [Setup a new Sanity Studio](#setup-a-new-sanity-studio)
  - [ENV Variables](#env-variables)
  - [Run project](#run-project)
  - [Data](#data)
    - [Load startup data](#load-startup-data)
    - [Load components data](#load-components-data)
    - [Backup Data](#backup-data)
  - [Packages worth noting](#packages-worth-noting)

---
## Setup

Use the Deploy Button below. It will let you deploy the starter using [Vercel](https://vercel.com/) as well as connect it to your Sanity Content Lake using the [Sanity Vercel Integration](https://www.sanity.io/docs/vercel-integration?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter).

[![Deploy to Vercel](https://camo.githubusercontent.com/5e471e99e8e022cf454693e38ec843036ec6301e27ee1e1fa10325b1cb720584/68747470733a2f2f76657263656c2e636f6d2f627574746f6e)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fscwambach%2Fnextjs-sanity-template&project-name=nextjs-sanity-template&repository-name=nextjs-sanity-template&demo-title=Another%20NextJS%20Wesbite%20Template&demo-description=Guess%20what%3F%21%20Someone%20made%20another%20Sanity%20and%20NextJS%20template%21%21%21%20This%20is%20feature%20rich%20website%20builder.%20Includes%20blog%2C%20categories%2C%20project%2C%20events%2C%20plus%20many%20more%20schemas%20pre-installed.&demo-url=https%3A%2F%2Fscw-nextjs-sanity-template.vercel.app%2F&demo-image=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F81pocpw8%2Fproduction%2Fdda43046ca1edaf8661603fab6101632388c7596-1025x733.png%3Fw%3D2000%26fit%3Dmax%26auto%3Dformat&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx&external-id=nextjs;template=nextjs-personal-website-cms-sanity-v3)

## Local Setup

### Install Homebrew <small style="font-size: 11px">(if you need to)</small>

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Install NVM <small style="font-size: 11px">(if you need to)</small>

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

### Install Node.js <small style="font-size: 11px">(if you need to)</small>

```
nvm install 16.13.0
```

### Install Yarn <small style="font-size: 11px">(if you need to)</small>

```
brew install yarn
```

### Install Root Level Packages

```
nvm use
yarn
```

### Install Sanity Studio

<small style="font-size: 11px">*from root level</small>

```
cd studio
yarn
```

### Install Sanity CLI

```
yarn global add @sanity/cli
```

### Setup a new Sanity Studio
<small style="font-size: 11px">*from `/studio` directory</small>

```
sanity init
```
- select `Create new project`
- Choose a project name.
- Select an oraganization (if you have one, or just click `None`)
- Use the default dataset configuration: `Y`
- Select a project output path: **Just hit enter here**
- Choose the `Clean project with no predefined schemas` project template.

Once that is complete copy the Sanity ID into the env files that are mentioned below and create a Token and copy that into the env files as well.

*<small style="font-size: 11px">If you're having trouble, please refer to the official [Sanity Docs](https://www.sanity.io/docs)</small>

---

## ENV Variables

you'll need the following variables in order for the project to run properly:

./.env
```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
SANITY_API_READ_TOKEN
SITE_URL
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
SLACK_HOOK
```

./studio/env.ts
```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
SANITY_TITLE
REMOTE_URL
LOCAL_URL
```
There should be example files of each located in the `root` and in the `studio` directories.

---

## Run project

this will launch both the NextJS and Sanity at `localhost:3000` and `localhost:3333`

```
nvm use
yarn fullstack
```

---
## Data

These commands need to be done from the `studio` directory:
### Load startup data


```
sanity dataset import startup-data.ndjson production
```
This will add in just enough to get the project running properly on the frontend without throwing an error. The project will be mostly blank, but you will see a `header` and `footer` with minimal data. This is would be the cleanest most bare-bones start.
### Load components data

```
sanity dataset import components-data.ndjson production
```
This will add in all the example data to the Sanity studio shown on the demo site, just to get you started. With this example data you should be able to see how all the data is linked together in the backend.


### Backup Data
This has to be done with NPM and not yarn. Not sure why, but there ya go. Replace `<studio id>` with the actualy studio ID.

```
npm run backup --id=<studio id>
```


---
## Packages worth noting

| Packages      | Description |
| ----------- | ----------- |
|[dayJs](https://day.js.org/) | formatting dates and times
|[fuseJs](https://fusejs.io/) | fast search
|[leafletJs](https://leafletjs.com/) | open source map
|[nodemailer](https://nodemailer.com/about/) | this handles all the forms
|[react-spinner](https://www.davidhu.io/react-spinners/) | visible during loading states
|[next-progress-bar](https://www.npmjs.com/package/nextjs-progressbar) | visual aid for page transitions
|[husky](https://typicode.github.io/husky/#/) | formats all files and runs linting before every commit
|[jest](https://jestjs.io/) | testing library
|[tailwind](https://tailwindcss.com/) | css styling and theming
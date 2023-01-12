![NextJS_Sanity_Template](https://user-images.githubusercontent.com/8299237/211938271-0e6a0c19-0d69-4891-940c-72f6579dcf3b.png)

This template is designed to speed up setup time for setting up a website with NextJS as a frontend and Sanity as a backend.

# [Demo Site](https://scw-nextjs-sanity-template.vercel.app/)

## TODO's
- [ ] How to setup emails

---

## Setup

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
SANITY_ID
SANITY_DATASET
SANITY_TOKEN
SITE_URL
SMTP_HOST
SMTP_PORT
SMTP_USER
SMTP_PASSWORD
SLACK_HOOK
```

./studio/env.ts
```
SANITY_ID
SANITY_DATASET
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
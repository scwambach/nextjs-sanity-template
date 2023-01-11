![NextJS_Sanity_Template](https://user-images.githubusercontent.com/8299237/211938271-0e6a0c19-0d69-4891-940c-72f6579dcf3b.png)

---

## Setup

#### Install Homebrew <small style="font-size: 11px">(if you need to)</small>

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Install NVM <small style="font-size: 11px">(if you need to)</small>

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

#### Install Node.js <small style="font-size: 11px">(if you need to)</small>

```
nvm install 16.13.0
```

#### Install Yarn <small style="font-size: 11px">(if you need to)</small>

```
brew install yarn
```

#### Install Root Level Packages

```
nvm use
yarn
```

#### Install Sanity Studio

*from root level

```
cd studio
yarn
```

#### Install Sanity CLI

```
yarn global add @sanity/cli
```

#### Setup a new Sanity Studio
*from `/studio` directory

```
sanity init
```
- select `Create new project`
- Choose a project name.
- Select an oraganization (if you have one, or just click `None`)
- Use the default dataset configuration: `Y`
- Select a project output path: **Just hit enter here**
- Choose the `Clean project with no predefined schemas` project template.

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

this will 

```
nvm use
yarn fullstack
```

---

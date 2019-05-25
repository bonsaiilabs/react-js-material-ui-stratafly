This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# System Requirements for Course
Before running the project, please make sure you have the following:

- Node.js LTS version which can be found [here](https://nodejs.org/en/download/). The course is upto date using this version at all times.
- Please refer to the help section below to resolve most common questions.

# Help

### - Can I use my own IDE to develop the project during the course ?
Yes, feel free to use your own IDE for the course.

### - How do I check my Node version ?
To check your current Node.js version, open your terminal and type the command below to see your current Node.js version.
```
node -v
```

### - How do I install Node.js LTS version on my machine ?
If you do not have the Node.js LTS version on your machine, you can download using either of the following:
1. Please go [here](https://nodejs.org/en/download/) and download the LTS version of Node.js installable file for your operating system.

2. Alternatively, you can use Node Version Manager (`nvm`) to install LTS version of Node.js in case
 you do not want to delete the existing Node version on your machine.<br>
 `NVM` allows you to use multiple Node versions on your machine and prevent disrupting other 
 projects you may be running with different `Node` versions.<br>
 
### - How do I use nvm to install Node.js ?
Click on [this link](https://github.com/nvm-sh/nvm) and follow the instructions provided in their README.md file 
to install nvm on your machine depending on your platform.

### - Should I install npm separately ?
No, `npm` comes with `Node.js` 
No matter what approach you use to install Node.js, npm will always come with it.

### - How do I check my npm version ?
Open your terminal and type the command below to get your npm version.
```
npm -v
```


### - What version of npm comes with LTS version of Node.js ?
Click on [this click](https://nodejs.org/en/download/) and the `npm` version should be mentioned under the title _**Downloads**_. 
You must ensure that the npm version and node version should match with what is mentioned on this official page.

### - Which browser are we using for this course ?
We shall be using the latest version of Chrome as of today. Be sure to install/update Chrome on your computer.

### - How do I open Chrome Browser in Mobile View ?
- To open Chrome in Mobile view mode using Mac, press ```Command+Option+i```

### - How do I run Application In Browser?
To run the app in the development mode,
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
We are using Chrome Developer console in this course.



### - How do I view changes in UI when I edit the code happen ?
Here are few ways to do so:

1) Run the app in Chrome developer console by using the below URL.
Open [http://localhost:3000](http://localhost:3000) 
The page will reload if you make edits and you will also see any lint errors in the console.

2) You can open Stratafly on your phone Chrome browser by using the IP Address from your console. 
For example after you run `npm start`, you will see the following on your terminal.
```$xslt
You can now view stratafly in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.161.3.10:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Open Chrome on your phone and hit this URL:
[http://192.161.3.10:3000](http://192.161.3.10:3000)
 

# Module1: Instructions

### Git branch
In the project directory, checkout the branch below:
```
git checkout m1_initial_setup
```


### Install Dependencies
In the project directory, run the below command to install dependencies.
```
npm install
```


### Start Application
In the project directory, run this command to start the project.
```
npm start
```


# Module2: Instructions

### Higher Order Component
- Example of Higher Order Component and CSS-in-JS on CodeSandbox (https://codesandbox.io/s/9lwyjl0m84)

### CSS In JS And Material UI Styling
- Example of CSS In JS and Material Ui Styling on CodeSandbox (https://codesandbox.io/s/jz5py8ll5w)

### Build Stratafly Header
- In the project directory, discard any changes you made and checkout the branch below:
```
git reset --hard
git checkout module2_01_header
```

### Setting Up Theme And Fonts
- In the project directory, discard any changes you made and checkout the branch below:
```
git reset --hard
git checkout module2_02_theme

```
### Material-UI Grid
- Example of Material UI Grid on CodeSandbox (https://codesandbox.io/s/ppqw5yyy47)

### Build Trip Type and Traveller Components
- In the project directory, discard any changes you made and checkout the branch below:
```
git reset --hard
git checkout module2_03_triptype_traveller
```


### Add Location and Date Fields to Search Form
- In the project directory, discard any changes you made and checkout the branch below:
```
git reset --hard
git checkout module2_04_location_dates
```

### Component For No Results Found
- In the project directory, discard any changes you made and checkout the branch below:
```
git reset --hard
git checkout module2_05_empty
```


### Official Resources   
- Here is the documentation of withStyles API: (https://material-ui.com/customization/css-in-js/#api)
- Material Grid API is available here: (https://material-ui.com/api/grid/)
- Material UI Overriding with classes: (https://material-ui.com/customization/overrides/#overriding-with-classes)


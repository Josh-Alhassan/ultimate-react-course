# Why do Frontend Frameworks exist?

Frontend frameworks like React.js exist to make it easier and faster to build cool and interactive website. They probide a set of rules and tools that help developers create websites more efficiently. Here's why they're helpful.

1. **Faster Development**: They help developers write code more quickly.
2. **Modular Design**: They let developers build websites in smaller, reusable parts.
3. **Easy Updates**: They make it simple to update parts of a website without affecting the whole thing.
4. **Smart Handling**: They manage how a website looks and behaves, making it easier for developers.
5. **Ready-Made Solutions**: They come with helpful features and solutinos that save time.
6. **Big Support Community**: Many developers use these frameworks, so there's lots of help and resource available.
7. **Works EVerywhere**: They ensure that websites work well on different web browers

# What is React?

- React is a JavaScript library for building user interfaces
- React is a **Declarative**, **Component Based**, **State driven**, JavaScript **Library** for building user-interfaces, created by facebook.

- **Component Based**: Components are the building blocks of user-interfaces. Components are reusable.
- **Declarative**: Declarative describe how components look like and how they work using a **declarative syntax called JSX**. _Declarative_ simply means telling React what a component should look like, **based on current data/state**.

React is **abstraction** away from DOM. We never touch the DOM.

**JSX** is a syntax that combines HTML, CSS, JavaScript as well as referencing other components.

- **State-Driven**: React _reacts_ to state changes by Re-Rendering the UI

**Note**: \*React updates it's UI using **state\***

- **JavaScript Library**: React is a library because React is only the "view" layer. We need to pick multiple external libraries to build a complete application.

Note: \*Frameworks built on React are **NEXT.js** and **Remix\***

# Setting Up React Project

1. **Create React App(CRA):** _Create React App_ is a command tool that sets up a new React project with pre-configured development environment.

**Advantages**

- Quick and easy: It provides a streamlined setup without the need for manuak configuration.

- Configuration abstraction: Many configurations are abstracted away, allowing developers to focus on coding.

**Usage**

- Open a terminal and run the following command

```
    npx create-react-app your-project-name
```

- Replace "your-project-name" with the desired name for your React Project.

- Once the installation is complete, navigate into the project folder:

```
cd your-project-name
```

- Start the development server:

```
npm start
```

- Visit `http://localhost:3000` in your web browser to see your new React app.

2. **Manual Setup** Manually setting up a React project involves creating the project structure and configuring the necessary tools yourself.

**Advantages**

- Full control: Allows for customised setup tailored to sepcific project requirements.
- Learning experience: Provides a deeper understanding of the underlying tools and configurations.

**Steps**

- Create a new projet folder and navigate into it

```
mkdir your-peoject-name
cd your-project-name
```

- Initialise a new Node project (creates a **'package.json'** file)

```
npm init -y
```

- install React and ReactDOM packages

```
npm install react react-dom
```

- Create an HTML file such as **'index.html'**, and set up a root element for your React app.

- Use a bundler like Webpack to bundle your JavaScript files.
- Set up Babel to transpile React code.
- Create a build script in **package.json** to run the development server or build the project.
- Start the development server or build the project based on your configuration.

Choosing between **Create React App** and **manual Setup** depends on factors like product complexity, customization needs, and the desire for a quick start versus a more hands-on learning experience. `create-react-app` is often recommended for beginners or smaller projects, while manual setup provides more flexibility for larger and customized projects.

3. **VITE**
   Vite is another tool that can be used to set up a React project, and it's gaining popularity in the React community. Vite is a fast, opinionated frontend bulild tool that aims to procide a quick and efficient development experience. Here's a brief overview of using Vite for setting up a React project.

**Installation**

- reate a new project folder and navigate into it

```
mkdir your-project-name
cd your-project-name
```

- initialise a new Node.js project (creates a '**package.json**' file)

```
npm init -y
```

- install Vite globally

```
npm install -g create-vite
```

**Create a React Aoo with Vite**

- Run the following command to create a new React app with Vite.

```
create-vite your-project-name --template react
```

- Navigate into the project folder

```
cd your-project-name
```

** Development**

- Start the development server

```
npm run dev
```

- visit `http://localhost:3000` in your web browser to see your React app.

# Course Material and FAQ for the Ultimate React Course

This branch of the repo contains starter files and final code for all sections and projects of the course, **exactly as shown in the videos**.

Use starter code to start each section, and **final code to compare it with your own code whenever something doesn't work**!

There is also a the [updates-and-fixes](https://github.com/jonasschmedtmann/ultimate-react-course/tree/updates-and-fixes) branch which is kept up-to-date with **latest library updates and important bugfixes 🐛**

🚨 **_Please read the following Frequently Asked Questions (FAQ) carefully before starting the course_** 🚨

## FAQ

### Q1: How do I download the files?

**A:** If you just want to download the entire code, click the green button saying "Code", and then choose the "Download ZIP" option. If you can't see the button (on mobile), use [this link](https://github.com/jonasschmedtmann/ultimate-react-course/archive/main.zip) instead.

### Q2: I'm stuck! Where do I get help?

**A:** Have you tried to fix the problem on your own? **Have you compared your code with the final code?** Are you using the library versions as indicated in the course videos? If you failed fixing your problem, please **post a detailed description of the problem to the Q&A area of that video over at Udemy**, along with a link to a [codesandbox](https://codesandbox.io/) containing your code.

### Q3: Can I see a final version of the course projects?

**A:** Sure! Here you go:

- [Pizza Menu](https://fast-react-pizza-menu.netlify.app/) (Components, props, JSX)
- [Travel List](https://travel-list-jonas.netlify.app/) (useState and state management)
- [Eat-n-split](https://eat-n-split.netlify.app/) (Practice project)
- [usePopcorn](https://usepopcorn.netlify.app) (useEffect, data fetching, custom hooks)
- [Classy weather](https://classy-weather.netlify.app/) (Class components)
- [Quiz App](https://the-react-quiz.netlify.app/) (useReducer)
- [WorldWise](https://worldwise-jonas.netlify.app/) (React Router, context API, memo, useMemo, useCallback)
- [Fast React Pizza](https://fast-react-pizza.netlify.app/) (React Router data loading, Redux, Redux Toolkit, thunks, Tailwind CSS)
- [The Wild Oasis](https://the-wild-oasis.vercel.app) (React Query, Styled Components, React Hook Form, Supabase, advanced compound component pattern, authentication, charts, dark mode, professional application planning and development)

### Q4: What about Next.js?

**A:** I will add a few sections about Next.js to a future Part 5 of this course in the first half of 2024. Until then, make sure to first master React itself 😉

### Q5: What VSCode theme are you using?

**A:** I use [One Monokai](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai) in this course. For the icons, I'm using [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme).

### Q6: Videos don't load, can you fix it?

**A:** Unfortunately, there is nothing I can do about it. The course is hosted on Udemy, and sometimes they have technical issues. Please just come back a bit later or [contact their support team](https://support.udemy.com/hc/en-us).

### Q7: Videos are blurred / have low quality, can you fix it?

**A:** Please open video settings and change the quality from 'Auto' to another value, for example 720p. If that doesn't help, please [contact the Udemy support team](https://support.udemy.com/hc/en-us).

### Q8: Are videos downloadable?

**A:** Videos used to be downloadable, but unfortunately, Udemy has disabled video downloads on all my courses in order to fight piracy. There is nothing I can do about this.

### Q9: I want to put these projects in my portfolio. Is that allowed?

**A:** Absolutely! Just make sure you actually built them yourself by following the course, and that you understand what you did. What is **not allowed** is that you create your own course/videos/articles based on this course's content!

### Q10: I love your courses and want to get updates on new ones. How?

**A:** First, you can subscribe to my email list [at my website](http://codingheroes.io/resources). Plus, I make important announcements on twitter [@jonasschmedtman](https://twitter.com/jonasschmedtman), so you should definitely follow me there 🔥

### Q11: How do I get my certificate of completion?

**A:** A certificate of completion is provided by Udemy after you complete 100% of the course. After completing the course, just click on the "Your progress" indicator in the top right-hand corner of the course page. If you want to change your name on the certificate, please [contact the Udemy support team](https://support.udemy.com/hc/en-us).

### Q12: Can you add subtitles in my language?

**A:** No. I provide professional English captions, but Udemy is responsible for subtitles in all other languages (automatic translations). So please [contact the Udemy support team](https://support.udemy.com/hc/en-us) to request your own language.

### Q13: Do you accept pull requests?

**A:** No, because this repository should contain the _exact_ same code that is shown in the videos. _However, feel free to add an issue if you found one._

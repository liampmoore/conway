
# Conway's Game of Life
This is a simple implementation of Conway's Game of Life using React, React Three Fiber, and a hash table data structure for storing the location of cells on the grid.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You'll need to be familiar with your computer's CLI in order to install the prerequisites and dependencies for this project, as well as for development.
You can check out a pretty good tutorial here: https://tutorial.djangogirls.org/en/intro_to_command_line/

You'll need Node.js installed on your machine in order to set up your development environment. See instructions here:
https://nodejs.org/en/download/

You'll need the Git CLI to clone and make changes to the repository. Follow the instructions here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

You'll also need Yarn to install the dependencies required for this project:
https://classic.yarnpkg.com/en/docs/install/

You'll need some sort of text editor to edit the code. I use VSCode:
https://code.visualstudio.com/

### Installing

Make sure you have a github account set up and all the above dependencies, then click the button that says Fork on the top right of this repository's github page. Now you'll have your own version of the repo.

On your version of the repository, click Code, then copy the address that says "Clone with https".

Make sure you are familiar with basic CLI, CD into the directory you want your project and enter:
```
git clone (address copied from your version of the repo)
```

Now cd into the project directory and type:
```
yarn
```
It will install all the Node dependencies necessary for the project.

To see a live version of the project as you code, cd into the project directory and type:
```
yarn start
```

Now you are set up to code! Play around as you see fit.


## Running the tests

To run the tests I've created for this project, cd into the project directory once you've installed and type:

```
yarn test
```

## Deployment

If you want to deploy your own version of the project, give vercel.com a shot. Just connect it to your github account and click "import project', and connect to your version of the repository.
https://vercel.com/solutions/react

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The web framework
* [Yarn](https://classic.yarnpkg.com/en/docs) - Dependency Management
* [Three.js](https://threejs.org/) - WebGL graphics library
* [React Three Fiber](https://github.com/react-spring/react-three-fiber) - A Three.js renderer that allows you to compose scenes as React components

## Contributing
Make sure you have a github account if you want to contribute to the repository. To contribute you'll need to configure your git CLI settings with your username and email.
```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

If you want to add something to this repo, get a good idea of what you are going to add, make your changes locally, save them, run the tests included, commit to your version of the repository. To commit, cd into the project directory and type:
```
git add .
```
This adds all changes in the current directory and subdirectories to the commit. Then type:
```
git commit -m 'write your summary of this particular group of changes within single quotes'
```
Push your commit or commits to your repo by typing:
```
git push -u origin master
```
If you'd like to contribute your changes to the original repo go to your github page for your version of the repo and click "Pull request". Set the request to compare your version to my version, write in an outline of everything you've changed, request me as a reviewer, then open the request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* This article saved me a lot of time, used this function to figure out the bounds of the html canvas in order to position my cells on a proper grid: https://discourse.threejs.org/t/functions-to-calculate-the-visible-width-height-at-a-given-z-depth-from-a-perspective-camera/269

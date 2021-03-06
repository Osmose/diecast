# {%= name %}

{%= description %}

## Developer Setup

{%= name %} uses [Bower](http://bower.io/) to download its dependencies.

1. Clone the repo: `git clone {%= repository %}; cd barber-shop`
2. Install dependencies using Bower: `bower install`.

### (Optional) Set up Grunt

If you also have [Grunt](http://gruntjs.com/) installed there's a convenient server for viewing the
pages in a web browser.

3. Install Grunt and the plugins locally: `npm install`
4. Run the development server with `grunt runserver`. It should be available at
   http://localhost:8000.

## Deployment

The `grunt build` command will create a `dist` folder at the root of the repository containing the
built application ready for being served statically.

The `grunt gh-pages` command will deploy the contents of the `dist` folder to the `gh-pages` branch
of the `origin` remote on your repository.

The `grunt deploy` command will run the `build` command and then deploy the built files with the
`gh-pages` command.

## License

Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
Licensed under the  {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.

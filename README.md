Git Search
==========

A command line tool utilizing NodeJS, install using NPM.

Search Github and get a styled list of results based on parameters or use full unstyled JSON output to 
pipe onto other bash commands like `pbcopy` and `grep`.

## Installation
Download, cd into directory and run:

`$ npm install -g`

## Options

~~~
    Usage: gitsearch <keywords>
    
    Options:
    
    -h,  --help                 output usage information
    -V,  --version              output the version number
    -o   --owner [name]         Filter by repository owner
    -l   --language [language]  Filter by repository language
    -f   --full [full]          Full output without any styling (pure JSON)
~~~

## Example usage

### Search keywords in languages
Will search for 'scrape' keyword under language 'PHP'

`gitsearch scrape -l PHP`

### Pipe output to other commands
Will search for keywords 'bbc', language 'ruby' with full output to JSON and `grep` Twitter

`gitsearch bbc -l ruby -f | grep Twitter`

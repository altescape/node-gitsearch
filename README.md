Git Search
==========

A command line tool utilizing node 

Search Github and get a styled list of results based on parameters or use full unstyled JSON output to 
pipe onto other bash commands like `pbcopy` and `grep`.

## Installation
Download, cd into directory and run `$ npm install -g`

~~~
    Usage: gitsearch <keywords>
    
    Options:
    
    -h,  --help                 output usage information
    -V,  --version              output the version number
    -o   --owner [name]         Filter by repository owner
    -l   --language [language]  Filter by repository language
    -f   --full [full]          Full output without any styling (pure JSON)
~~~
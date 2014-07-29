Happydev-lite
=============

Site for student IT-conference

NVM install
------------

```
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.7.0/install.sh | sh
$ nvm install 0.10
$ cd %project_dir%
$ nvm use
```
Check your node version
```
$ node -v
```

Grunt install
------------

```
$ npm install grunt
$ npm install -g grunt-cli
```
Check your grunt version
```
$ grunt -version 
```

CSSO install
------------

```  
$ git clone git://github.com/css/csso.git
```
Check your csso version
```
$ csso -v 
```


Before production 
=============

1. CSS concatenation 
------------

```
$ grunt concat_css
```

2. JS concatenation
------------

```
$ grunt concat
```

3. CSS minification 
------------

```
$ csso <in_file_name> <out_file_name>
```

4. JS minification 
------------

```
$ grunt uglify
```

5. Images minification 
------------

```
$ grunt imagemin
```

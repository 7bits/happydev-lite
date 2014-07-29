happydev-lite
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
Now you can check your node version
```
$ node -v
```

Grunt install
------------

```
$ npm install grunt
```

CSSO install
------------

```  
$ git clone git://github.com/css/csso.git
```

Before production 

CSS concatination 
------------

```
$ grunt concat_css
```

JS concatination
------------

```
$ grunt concat
```

CSS minification 
------------

```
$ csso <in_file_name> <out_file_name>
```

JS minification 
------------

```
$ grunt uglify
```

Images minification 
------------

```
$ grunt imagemin
```

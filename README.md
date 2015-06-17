# Angular-QuickStart
The learning curve i have followed in learning the angular. Check the branches

## Get started
Next, install some global dependencies with npm:
```bash
	npm install ts tsd typescript@^1.5.0-beta http-server -g
```
Install Angular 2 using tsd
```bash
tsd query angular2 --action install
```

NOTE: use `sudo` if you have to, but if you run the following, you won't ever need to use `sudo` to use npm:

	sudo chown -R `whoami` ~/.npm && sudo chown -R `whoami` /usr/local/

then install the local dependencies:
```bash
	npm install
```
Now, you have all the dependencies. You just need to open two terminal windows, the first for running the compiler, and the second for serving the files. In the first command window start the compiler with `npm start`. In the second window start a basic server with `http-server . -p 5000`. Then go to `http://localhost:5000` and you should be all set.
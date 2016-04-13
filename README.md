# iws-feature-request
A simple tool for Intuitive Web Solutions team members to record features requested by clients. Application is up at http://54.191.112.74/

## About the app
The technology stack of this app is React.js, Node.js, and MongoDB. This stack makes it so that almost 100% of the codebase is in JavaScript. The front-end architecture takes advantage of React's one-way data flow model by utilizing a dispatcher to close the loop between actions and data stores.

Furthermore, the front-end communicates with the back-end via a restful API at path /stores. For example, you can get all of the features json by visiting http://54.191.112.74/stores/feature. To get a specific doc's json, visit /stores/feature/:id. The API accepts GET, POST, PUT, and DELETE commands.

## Running the app in 20 easy steps
If you want to run the app on your personal machine, then you'll need to install Node.js and MongoDB. Assuming you have done this and you have a MongoDB daemon running, you can skip to commands #19 and #20.

If you want to load the app onto a blank ec2, below is the set of commands for getting this web app running on an ec2 with Amazon Linux AMI 2016.03.0. I usually have issues getting MongoDB off the ground, so if you get an error when you execute #14, I would just recommend that you yum remove mongodb-org, yum autoremove the dependencies, and retry the installation. Double check you're installing MongoDB 2.6 as well.
#### Basics
	1.	sudo yum update
	2.	sudo yum install gcc-c++ make
	3.	sudo yum install openssl-devel
	4.	sudo yum install git
#### Installing node
	5.	wget https://nodejs.org/dist/v4.4.3/node-v4.4.3.tar.gz
	6.	tar -xvf node-v4.4.3.tar.gz
	7.	cd node-v4.4.3
	8.	./configure && make && sudo make install
#### Cloning repo
	9.	cd /home/ec2-user/
	10.	git clone https://github.com/Zach417/iws-feature-request
#### Installing MongoDB
	11.	cd /etc/yum.repos.d/
	12.	sudo nano mongodb-org-2.6.repo
	⁃	[[mongodb-org-2.6] name=MongoDB 2.6 Repository baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/ gpgcheck=0 enabled=1
	13.	sudo yum install -y mongodb-org
	14.	sudo service mongod start
#### Linking node for sudo commands
	15.	cd /home/ec2-user/iws-feature-request/
	16.	sudo ln -s /usr/local/bin/node /usr/bin/node
	17.	sudo ln -s /usr/local/lib/node /usr/lib/node
	18.	sudo ln -s /usr/local/bin/npm /usr/bin/npm
#### Running the app

npm i installs all of the required packages for the app and npm start executes server.js, which hosts the app on port 80.

	19.	npm i
	20.	sudo npm start

## Other notes
All of the front-end javascript is compiled/minified to make it faster across the wire, so if you want to make changes to the code, you'll have to "npm run build" to compile the code, which is a link to a script called "build" in the project's package.json.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
What things you need to install the software.

- Git.
- PHP and MySQL.
- Composer.
- Laravel CLI.
- Node

## Install
Clone the git repository on your computer
```
$ git clone https://github.com/bullypb23/scheduling-web-app.git
```
You can also download the entire repository as a zip file and unpack in on your computer if you do not have git

After cloning the application, you need to install it's dependencies.
```
$ cd scheduling-app
$ composer install
npm install
```

## Setup
When you are done with installation, copy the .env.example file to .env
```
$ cp .env.example .env
```

Generate the application key
```
$ php artisan key:generate
```

Generate JWT secret
```
php artisan jwt:secret
```
Create database on local server

Migrate the application
```
$ php artisan migrate
``` 

Run the application
```
$ php artisan serve
```
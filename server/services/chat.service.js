// import {User} from '../models/user.model';
// import {Chat} from '../models/chat.model';
var User = require('../models/user.model');
var Chat = require('../models/chat.model');
var fs = require('fs');
exports.getchat = async function (id) {
    try {

        var chat = fs.readFileSync('./data.txt').toString();
        var data = JSON.parse(chat);
        var query;
        data.forEach(element => {
            if (element.userid == id) {
                query = element
            }
        });
        if (query != undefined) {
            return query;
        } else {
            return false;
        }
    } catch (e) {
        throw Error('error occured while finding userid');
    }
};
exports.postchat = async function (data) {
    try {

        var chat = fs.readFileSync('data/user.txt').toString();
        var old_data = JSON.parse(chat);
        var found = old_data.find(el => {
            return el.username == data.username;
        })
        if (found == undefined) {
            old_data.push(data);
            fs.truncateSync('data/user.txt');
            fs.writeFileSync('data/user.txt', JSON.stringify(old_data));
            return 'Sign up done';
        }else {
            return 'Account already existed';
        }


    } catch (e) {
        throw Error('error occured while posting new data');
    }
};
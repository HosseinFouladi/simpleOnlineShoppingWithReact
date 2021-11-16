//import {API_URL} from '../helpers/Constants';
//import { saveUser}from '../helpers/Helper';
import { shallow, mount, render } from 'enzyme';
import Login from './Login';
import React from 'react';
import Signup from './Signup';
//import { render, screen } from '@testing-library/react';

/*it("it is login user test",(done)=>{
    expect.assertions(1);
    saveUser(API_URL.LOGIN,{username:"@hossein79",password:"45686543"}).then(data=>{
        expect(data.status).toEqual(201);
        done();
    })
})*/
describe('pages test',()=>{
    it('login page test',()=>{
        
       const log=render(<Login/>);
       expect(log).toMatchSnapshot();
        
    })
})
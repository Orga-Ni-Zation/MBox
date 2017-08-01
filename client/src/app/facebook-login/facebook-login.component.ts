import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import '../../fbsdk.js';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

declare var FB: any;

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {

  constructor() {
    FB.init({
            appId      : 'your-app-id',
            cookie     : false,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.5' // use graph api version 2.5
        });
    }

    onFacebookLoginClick() {
        FB.login();
    }

    statusChangeCallback(resp) {
        if (resp.status === 'connected') {
            // connect here with your server for facebook login by passing access token given by facebook
        }else if (resp.status === 'not_authorized') {

        }else {

        }
    };
    ngOnInit() {
        FB.getLoginStatus(response => {
            this.statusChangeCallback(response);
            if (response.status === 'connected') {
              console.log(response.authResponse.accessToken);
              }
        });
    }
  }
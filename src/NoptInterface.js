/*
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

const path = require('path');
const url = require('url');
const { cordova_platforms } = require('cordova-lib');

/**
 * Static unit-testable class to return known opts and shorthand options.
 */
module.exports = class NoptInterface {
    static getKnownOpts () {
        const platforms = Object.keys(cordova_platforms);
        return {
            platform: platforms,
            platform_name: platforms,
            project: path,
            plugin: [String, path, url, Array],
            version: Boolean,
            help: Boolean,
            debug: Boolean,
            silent: Boolean,
            plugins: path,
            link: Boolean,
            variable: Array,
            www: path,
            searchpath: [path, Array],
            save: Boolean,
            name: String,
            plugin_id: String,
            plugin_version: String,
            plugins_dir: String
        };
    }

    static getShorthands () {
        return { var: ['--variable'], v: ['--version'], h: ['--help'] };
    }
};

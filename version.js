/**
 * Created by HAIER on 2017/9/14.
 */
const fs = require('fs')
const path = require('path')
const beautify = require('js-beautify').js_beautify
const config = require('./package.json')

const dist = path.join(`${__dirname}/dist`)
const maxVersion = 8


import React, { Component, PropTypes as PT } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import fs from 'fs'
import { devPublicDir, publicDir } from '../../paths'
import { DEBUG, appName, vendorName, statsName, inlineName } from '../../config'

const encoding = { encoding: 'utf8' }

export default class Html extends Component {

  static propTypes = {
    app: PT.string.isRequired,
    content: PT.string.isRequired,
    inline: DEBUG ? PT.bool : PT.string,
    vendor: PT.string.isRequired
  };

  static defaultProps = {
    app: Html.getScript(appName),
    vendor: Html.getScript(vendorName),
    inline: Html.getWebpackJsonpInlineScript()
  };

  constructor(props, context) {
    super(props, context)
  }

  static getDoctype() {
    return '<!doctype html>'
  }

  static getScript(name) {
    if (DEBUG) return `${devPublicDir}/${name}.js`

    const file = fs.readFileSync(`${publicDir}/${statsName}.json`, encoding)
    const stats = JSON.parse(file)

    return stats.assetsByChunkName[name]
  }

  static getWebpackJsonpInlineScript() {
    if (DEBUG) return false
    return fs.readFileSync(`${publicDir}/${inlineName}.js`, encoding)
  }

  static renderToStaticMarkup(props) {
    return Html.getDoctype() + renderToStaticMarkup(<Html {...props}/>)
  }

  render() {
    const { app, content, inline, vendor } = this.props

    return (
      <html
        className='no-js'
        lang='en_US'
        >
        <head>
          <meta charSet='utf-8'/>
          <meta content='IE=edge,chrome=1' httpEquiv='X-UA-Compatible'/>

          <title>Sightmap +</title>

          <meta content='' name='description'/>
          <meta content='' name='keywords'/>

          {/* Spiders must use meta description */}
          <meta content='noodp, noydir' name='robots'/>

          {/* No Google Translate toolbar */}
          <meta content='notranslate' name='google'/>

          {/* Viewport and mobile */}
          <meta content='width = device-width,
                         initial-scale = 1,
                         user-scalable = no,
                         maximum-scale = 1,
                         minimum-scale = 1'
            name='viewport'
            />
          <meta content='true' name='HandheldFriendly'/>
          <meta content='320' name='MobileOptimized'/>

        </head>
        <body>
          <div id='app'>
            <div dangerouslySetInnerHTML={{ __html: content }}/>
          </div>

          {inline && <script dangerouslySetInnerHTML={{ __html: inline }}/>}
          <script src={vendor}/>
          <script src={app}/>
        </body>
      </html>
    )
  }
}

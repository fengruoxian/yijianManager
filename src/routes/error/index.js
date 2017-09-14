import React from 'react'
import { Icon } from 'antd'
import styles from './index.less'


/**
 * frown-o为iconfont图标（哭脸）
 * @constructor
 */
const Error =() => (<div className="content-inner">
  <div className={styles.error}>
    <Icon type="frown-o"/>
    <h1>404 Not Fount</h1>
  </div>
</div>)

export default Error

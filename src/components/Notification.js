import React from 'react'

export const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container  ${showNotification ? 'show': '' }`}>
        <p>You have already entered this letter</p>
  </div>
  )
}

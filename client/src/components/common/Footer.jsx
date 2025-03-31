import React from 'react'

function Footer() {
  return (
    <div style={{
      backgroundColor: 'var(--primary-color)',
      color: 'white',
      padding: '2rem 0',
      marginTop: 'auto',
      borderTop: '1px solid var(--secondary-color)',
      boxShadow: '0 -2px 10px rgba(63, 167, 214, 0.1)'
    }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 style={{ 
              color: 'var(--secondary-color)',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}>EchoBlog</h5>
            <p style={{ color: 'white', opacity: 0.9 }}>Your tech-savvy blogging platform</p>
          </div>
          <div className="col-md-6 text-end">
            <p style={{ 
              color: 'white',
              fontFamily: "'JetBrains Mono', monospace",
              opacity: 0.9
            }}>© 2025 EchoBlog. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
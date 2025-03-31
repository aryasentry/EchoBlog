import React from 'react'
import { SignIn } from '@clerk/clerk-react'

function SIgnin() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 200px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, rgba(63, 167, 214, 0.05) 0%, rgba(255, 111, 97, 0.05) 100%)'
    }}>
      <SignIn 
        appearance={{
          layout: {
            logoPlacement: "inside",
            socialButtonsPlacement: "bottom",
            helpPageUrl: "https://help.example.com",
          },
          elements: {
            rootBox: {
              backgroundColor: 'white',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(26, 46, 64, 0.1)',
              maxWidth: '480px',
              width: '100%',
              padding: '2rem',
              margin: '0 auto'
            },
            card: {
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
              width: '100%'
            },
            headerTitle: {
              color: 'var(--primary-color)',
              fontSize: '1.75rem',
              fontFamily: "'JetBrains Mono', monospace",
              textAlign: 'center',
              marginBottom: '1.5rem'
            },
            headerSubtitle: {
              color: 'var(--text-color)',
              textAlign: 'center',
              fontSize: '1.1rem'
            },
            formButtonPrimary: {
              backgroundColor: 'var(--secondary-color)',
              color: 'white',
              fontFamily: "'JetBrains Mono', monospace",
              border: 'none',
              padding: '12px 24px',
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: 'var(--primary-color)'
              }
            },
            formFieldInput: {
              backgroundColor: 'var(--background-color)',
              color: 'var(--text-color)',
              border: '1px solid var(--border-color)',
              padding: '12px 16px',
              fontSize: '1rem',
              width: '100%',
              '&:focus': {
                border: '1px solid var(--secondary-color)',
                outline: 'none',
                boxShadow: '0 0 0 2px rgba(63, 167, 214, 0.1)'
              }
            },
            formFieldLabel: {
              color: 'var(--text-color)'
            },
            footer: {
              color: 'var(--text-color)'
            },
            footerActionLink: {
              color: 'var(--secondary-color)',
              '&:hover': {
                color: 'var(--primary-color)'
              }
            },
            socialButtonsBlockButton: {
              backgroundColor: 'var(--background-color)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-color)',
              '&:hover': {
                backgroundColor: 'rgba(63, 167, 214, 0.05)'
              }
            },
            socialButtonsBlockButtonText: {
              color: 'var(--text-color)'
            },
            dividerLine: {
              backgroundColor: 'var(--border-color)'
            },
            dividerText: {
              color: 'var(--text-color)'
            },
            identityPreviewText: {
              color: 'var(--text-color)'
            },
            formFieldSuccessText: {
              color: 'var(--secondary-color)'
            },
            formFieldErrorText: {
              color: 'var(--accent-color)'
            },
            alert: {
              backgroundColor: 'rgba(255, 111, 97, 0.1)',
              border: '1px solid var(--accent-color)',
              color: 'var(--accent-color)'
            }
          }
        }}
      />
    </div>
  )
}

export default SIgnin
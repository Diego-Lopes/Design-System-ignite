import * as ToastPrimitive from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'

export const Provider = styled(ToastPrimitive.Provider, {})

const slideIn = keyframes({
  from: { transform: `translateX(100%)` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(100%)` },
})

export const ToastRoot = styled(ToastPrimitive.Root, {
  fontFamily: '$default',
  background: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',

  wordBreak: 'break-all',
  lineHeight: '160%',
  padding: '$3 $12 $3 $5',
  gap: '$1',

  position: 'relative',
  display: 'flex',
  flexDirection: 'column',

  '@media(max-width:400px)': {
    margin: '$1 $4 $3',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms`,
  },

  '&[data-state="closed"]': {
    opacity: 0,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 1000ms ease-out`,
  },
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: '$4',
  right: '$4',

  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  outline: 'none',

  '@media(max-width:400px)': {
    bottom: 0,
    right: 0,
  },
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  color: '$gray200',
  fontSize: '$sm',
})

export const ToastCloseButton = styled(ToastPrimitive.Close, {
  position: 'absolute',
  right: '$4',
  top: '$4',

  lineHeight: 0,
  borderRadius: '$xs',
  cursor: 'pointer',

  width: '$5',
  height: '$5',
  color: '$gray200',

  '&:hover': {
    transition: '0.2s',
    filter: 'brightness(1.2)',
  },
})

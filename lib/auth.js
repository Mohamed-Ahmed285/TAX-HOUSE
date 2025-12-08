import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth } from './firebase'

/**
 * Sign up with email/password using Firebase Authentication.
 */
export const signUpUser = async ({ email, password }) => {
  if (!email || !password) throw new Error('البريد الإلكتروني وكلمة المرور مطلوبة')
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  return user
}

/**
 * Sign in with email/password using Firebase Authentication.
 */
export const loginUser = async ({ email, password }) => {
  if (!email || !password) throw new Error('البريد الإلكتروني وكلمة المرور مطلوبة')
  const { user } = await signInWithEmailAndPassword(auth, email, password)
  return user
}

/**
 * Logout the current user.
 */
export const logoutUser = async () => {
  await signOut(auth)
}

/**
 * Verify an ID token on the server (or client) without exposing secrets.
 * Uses Google Identity Toolkit to validate the token payload.
 */
export const verifyIdToken = async (idToken) => {
  if (!idToken) throw new Error('مطلوب رمز التحقق')

  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  if (!apiKey) throw new Error('مفتاح Firebase مفقود في المتغيرات البيئية')

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken })
    }
  )

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.error?.message || 'فشل التحقق من الرمز')
  }

  const data = await response.json()
  return data?.users?.[0] || null
}


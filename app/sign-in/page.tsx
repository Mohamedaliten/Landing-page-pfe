'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Flame, Eye, EyeOff } from 'lucide-react';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClientSide, setIsClientSide] = useState(false);

  // Only initialize Clerk hooks on the client side
  useEffect(() => {
    setIsClientSide(true);
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isClientSide) return;
    
    try {
      setIsLoading(true);
      setErrorMessage('');

      // We'll import and use Clerk hooks only on the client side
      const { useSignIn } = await import("@clerk/nextjs");
      const { signIn, setActive } = useSignIn();

      if (!signIn) {
        setErrorMessage('Authentication not available');
        return;
      }

      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        router.push('/dashboard');
      } else {
        console.error('Sign in failed', result);
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (err: any) {
      console.error('Error during sign in:', err);
      setErrorMessage(err.errors?.[0]?.message || 'Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social sign in
  const handleSocialSignIn = async (provider: 'oauth_google' | 'oauth_facebook' | 'oauth_apple') => {
    if (!isClientSide) return;
    
    try {
      setErrorMessage('');
      
      // Import Clerk hooks only on client side
      const { useSignIn, useAuth } = await import("@clerk/nextjs");
      const { signIn } = useSignIn();
      const auth = useAuth();

      if (!signIn || !auth) {
        setErrorMessage('Authentication not available');
        return;
      }
      
      // If already signed in, sign out first
      if (auth.isSignedIn) {
        await auth.signOut();
      }
      
      // Now proceed with social sign in
      signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: `${window.location.origin}/sso-callback`,
        redirectUrlComplete: `${window.location.origin}/dashboard`
      });
    } catch (err: any) {
      console.error('Error during sign out or sign in:', err);
      setErrorMessage('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Welcome Message & Form */}
        <div className="md:w-1/2 p-8">
          <div className="mb-8 text-center">
            <Flame className="h-8 w-8 text-orange-500 mx-auto mb-2" />
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="text-gray-500 text-sm">Welcome back! Please enter your details.</p>
          </div>
          
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {errorMessage}
            </div>
          )}
          
          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button 
              onClick={() => handleSocialSignIn('oauth_google')}
              className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={!isClientSide}
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
            </button>
            <button 
              onClick={() => handleSocialSignIn('oauth_facebook')}
              className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={!isClientSide}
            >
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"/>
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>
          
          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                placeholder="example@gmail.com"
                required
              />
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                <Link href="#" className="text-xs text-gray-500 hover:text-orange-500">
                  Forgot password
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" 
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Remember for 30 days
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isLoading || !isClientSide}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition flex items-center justify-center"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Sign in"
              )}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-orange-500 hover:text-orange-600 font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        
        {/* Image */}
        <div className="hidden md:block md:w-1/2 bg-white p-6">
          <div className="h-full w-full relative flex items-center justify-center">
            <Image 
              src="/images/login.gif"
              alt="Login illustration" 
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
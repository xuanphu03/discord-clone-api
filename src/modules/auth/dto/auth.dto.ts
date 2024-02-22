import { z } from 'zod';

export const forgotPasswordDto = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email is not valid. Please provide a valid email address.'),
});

export const signInDto = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email is not valid. Please provide a valid email address.'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, 'Password must be at least 8 characters long'),
});

export const signUpDto = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Email is not valid. Please provide a valid email address.'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, 'Password must be at least 8 characters long'),
  username: z.string({
    required_error: 'Username is required',
  }),
});

export const resetPasswordDto = z.object({
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, 'Password must be at least 8 characters long'),
});
